import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('this fucking user', user);
      } else {
        // No user is signed in.
      }
    });
  }

}
