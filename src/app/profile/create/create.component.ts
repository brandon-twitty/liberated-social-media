import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AfterHoursEvent} from '../../models/afterHoursEvent';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {


  constructor(public fb: FormBuilder, private storage: AngularFireStorage) { }


  selectedFile: File = null;
  bbb;
  imageUrl: string;
  downloadURL: Observable<string>;
  userForm: FormGroup;
  date: any;
  user: User = new User();




  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.createProfileForm();
      } else {
        // No user is signed in.
      }
    });
  }
createProfileForm(){
    this.userForm = this.fb.group({
      handle: [''],
      fullName: [''],
      age: [''],
      bio: [''],
      Q1: [''],
      Q2: [''],
      Q3: [''],
      Q4: ['']
    });
}
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
                  this.bbb = url;
                }
                this.imageUrl = this.bbb;
                console.log(this.bbb);
              });
            })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
  }
prepareObject(){
    this.user.photoURL = this.bbb;
}

}
