import {Component, Inject, OnInit} from '@angular/core';
import {finalize, tap} from 'rxjs/operators';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {FileService} from '../services/file.service';
import * as firebase from 'firebase';
export interface MyData {
    name: string;
    filepath: string;
    size: number;
}
@Component({
  selector: 'app-upload-profile-img',
  templateUrl: './upload-profile-img.page.html',
  styleUrls: ['./upload-profile-img.page.scss'],
})
export class UploadProfileImgPage implements OnInit{

    selectedImage: any = null;
    url: string;
    id: string;
    file: string;
    constructor( @Inject(AngularFireStorage) private storage: AngularFireStorage, @Inject(FileService) private fileService: FileService) { }
    ngOnInit() {
        this.fileService.getImageDetailList();
    }
    showPreview(event: any) {
        this.selectedImage = event.target.files[0];
    }
    save() {
        let name = this.selectedImage.name;
        const fileRef = this.storage.ref(name);
        console.log('logged in user = ', firebase.auth().currentUser);
        this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
            finalize(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    this.url = url;
                    this.fileService.insertImageDetails(this.id, this.url);
                    alert('Upload Successful');
                });
            })
        ).subscribe();
    }
    view(){
        this.fileService.getImage(this.file);
    }
}
