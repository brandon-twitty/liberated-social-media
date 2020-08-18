import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upload-profile-img',
  templateUrl: './upload-profile-img.page.html',
  styleUrls: ['./upload-profile-img.page.scss'],
})
export class UploadProfileImgPage implements OnInit {

  title = 'cloudsStorage';
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor( private storage: AngularFireStorage) {}
  ngOnInit() {}
  onFileSelected(event) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
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

}
