import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UploadImageComponent} from '../shared/upload-image/upload-image.component';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 data: any = {};
  user: User;
  constructor(public router: Router) { }


    ngOnInit() {
    }
    isUserLoggenIn(){
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                // User is signed in.
                const displayName = user.displayName;
                const email = user.email;
                const emailVerified = user.emailVerified;
                const photoURL = user.photoURL;
                const isAnonymous = user.isAnonymous;
                const uid = user.uid;
                const providerData = user.providerData;
            } else {
                // this.editProfile();
            }
        });
    }
    createProfile(){
      this.router.navigateByUrl('profile/create');
    }
}
