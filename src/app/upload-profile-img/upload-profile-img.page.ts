import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

import {Router} from '@angular/router';
import {FileService} from '../shared/services/file.service';
import {User} from '../shared/models/user';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-upload-profile-img',
  templateUrl: './upload-profile-img.page.html',
  styleUrls: ['./upload-profile-img.page.scss'],
})
export class UploadProfileImgPage implements OnInit {
    userData: any;
    selectedImage: any = null;
    private basePath = '/images';
    user: User;
    url: string;
    id: string;
    file: string;
    title = 'cloudsStorage';
    selectedFile: File = null;
    fb;
    downloadURL: Observable<string>;
    constructor(private storage: AngularFireStorage, private fileService: FileService, private router: Router, private authService: AuthenticationService){
    }

    ngOnInit() {
        this.fileService.getImageDetailList();
        this.userData = JSON.parse(localStorage.getItem('user'));
        console.log('user logged in', this.userData);
    }
    showPreview(event) {
        let n = Date.now();
        this.file = event.target.files[0];
        const filePath = `profileImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`profileImages/${n}`, this.file);
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
    /*showPreview(event: any) {
        this.selectedImage = event.target.files[0];
    }*/
    save() {
        let n = Date.now();
        // const name = this.selectedImage.name;
        const filePath = `profileImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(`${filePath}`, this.file).snapshotChanges().pipe(
            finalize(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    this.url = url;
                    this.id = Date();
                    this.fileService.insertImageDetails(this.id, this.url);
                    // this.userData.im
                    // this.authService.SetUserData(this.userData);
                    alert('Upload Successful');
                });
            })
        ).subscribe(u => {
            console.log('response', u);

            this.router.navigate(['wizard']);
        });
    }
    view() {
        this.fileService.getImage(this.file);
    }
}
