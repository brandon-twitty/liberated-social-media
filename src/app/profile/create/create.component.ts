import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AfterHoursEvent} from '../../models/afterHoursEvent';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  userForm: FormGroup;
  date: any;
  user: User = new User();
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.createProfileForm();
        console.log('this user is logged in', user);
      } else {
        // No user is signed in.
      }
    });
  }
createProfileForm(){
    this.userForm = this.fb.group({
      handle: [''],
      photoUrl: [''],

    });
}
prepareObject(){

}
}
