import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {FileService} from '../shared/services/file.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
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
  // tslint:disable-next-line:max-line-length
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

      this.router.navigate(['list-of-profiles']);
    });
  }
  view(){
    this.fileService.getImage(this.file);
  }

}
