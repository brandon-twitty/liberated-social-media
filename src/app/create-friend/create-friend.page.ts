import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CameraResultType, Plugins} from '@capacitor/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {ImageData} from '../shared/models/image';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {finalize, tap} from 'rxjs/operators';

const { Camera } = Plugins;

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.page.html',
  styleUrls: ['./create-friend.page.scss'],
})
export class CreateFriendPage implements OnInit {
    guestPicture: any;
    image = ImageData;
    task: AngularFireUploadTask;
    percentage: Observable<number>;
    // Snapshot of uploading file
    snapshot: Observable<any>;

    // Uploaded File URL
    UploadedFileURL: Observable<string>;

    // Uploaded Image List
    images: Observable<ImageData[]>;

    // File details
    fileName: string;
    fileSize: number;

    // Status check
    isUploading: boolean;
    isUploaded: boolean;

    private imageCollection: AngularFirestoreCollection<ImageData>;
  constructor(public authService: AuthenticationService,
              public router: Router, private storage: AngularFireStorage, private database: AngularFirestore, private activeRoute: ActivatedRoute) {
      this.isUploading = false;
      this.isUploaded = false;
      // Set collection where our documents/ images info will save
      this.imageCollection = database.collection<ImageData>('freakyImages');
      this.images = this.imageCollection.valueChanges();
      const navigation = this.router.getCurrentNavigation();
      const state = navigation.extras.state;
      this.guestPicture = state.guestPicture;
      console.log('picture from landing page', this.guestPicture);
  }

    uploadFile(event: FileList) {


        // The File object
        const file = event.item(0);

        // Validation for Images Only
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
            return;
        }

        this.isUploading = true;
        this.isUploaded = false;


        this.fileName = file.name;

        // The storage path
        const path = `freakyStorage/${new Date().getTime()}_${file.name}`;

        // Totally optional metadata
        const customMetadata = { app: 'Freaky Image Upload Demo' };

        // File reference
        const fileRef = this.storage.ref(path);

        // The main task
        this.task = this.storage.upload(path, file, { customMetadata });

        // Get file progress percentage
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(

            finalize(() => {
                // Get uploaded file storage path
                this.UploadedFileURL = fileRef.getDownloadURL();

                this.UploadedFileURL.subscribe(resp => {
                    this.addImagetoDB({
                        name: file.name,
                        filepath: resp,
                        size: this.fileSize
                    });
                    this.isUploading = false;
                    this.isUploaded = true;
                },error => {
                    console.error(error);
                });
            }),
            tap(snap => {
                this.fileSize = snap.totalBytes;
            })
        );
    }
    async takePicture() {
        try {
            const profilePicture = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Base64,
            });
            this.guestPicture = profilePicture.base64String;
        } catch (error) {
            console.error(error);
        }
    }

    addImagetoDB(image: ImageData) {
        // Create an ID for document
        const id = this.database.createId();

        // Set document id with value in database
        this.imageCollection.doc(id).set(image).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log('error' + error);
        });
    }

    ngOnInit(): void {
    }
    signUp(email, password){
        this.authService.RegisterUser(email.value, password.value)
            .then((res) => {
                // Do something here
                this.authService.SendVerificationMail();
                this.router.navigate(['verify-email']);
            }).catch((error) => {
            window.alert(error.message);
        });
    }

}



  // TODO save imageurl to database

