import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {FileService} from '../services/file.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-profile-img',
  templateUrl: './upload-profile-img.page.html',
  styleUrls: ['./upload-profile-img.page.scss'],
})
export class UploadProfileImgPage implements OnInit {
    selectedImage: any = null;
    private basePath = '/images';
    url: string;
    id: string;
    file: string;
  title = 'cloudsStorage';
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor( private storage: AngularFireStorage, private fileService: FileService, private router: Router ) {}
  ngOnInit() {
      this.fileService.getImageDetailList();
  }
    /*showPreview(event: any) {
        this.selectedImage = event.target.files[0];
    }*/

    showPreview(event) {
        this.selectedImage = event.target.files[0];
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `profileImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`profileImages/${n}`, file);
        task
        .snapshotChanges()
        .pipe(
            finalize(() => {
              this.downloadURL = fileRef.getDownloadURL();
              this.downloadURL.subscribe(url => {
                if (url) {
                  this.fb = url;
                }
                console.log(this.fb);
              });
            })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);

          }
        });
  }
    save() {
        const name = this.selectedImage.name;
        const fileRef = this.storage.ref(name);
        this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
            finalize(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    this.url = url;
                    this.id = Date();
                    this.fileService.insertImageDetails(this.id, this.url);
                    alert('Upload Successful');
                });
            })
        ).subscribe(u => {
            this.router.navigate(['intro-prof']);
        });
    }
    view(){
        this.fileService.getImage(this.file);
    }

}
