import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AfterHoursEvent} from '../../shared/models/afterHoursEvent';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../shared/models/user';



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
prepareObject(){

}
}
