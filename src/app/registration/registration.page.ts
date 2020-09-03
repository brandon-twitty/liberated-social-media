import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {User} from '../shared/models/user';
import {AdminSdkService} from '../shared/services/admin-sdk.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
    newUser: User = new User();
  constructor( public authService: AuthenticationService,
               public adminSdkService: AdminSdkService,
               public router: Router) { }

  ngOnInit() {
  }
    signUp(email, password){
        // this.authService.RegisterUser(email.value, password.value);
        this.newUser.email = email.value;
        this.newUser.password = password.value;
        // this.newUser.phoneNumber = phoneNumber.value;
        this.adminSdkService.createUser(this.newUser).subscribe(data => {
            console.log('user response', data);
            this.authService.SignIn(this.newUser.email, this.newUser.password).then((u => {
                this.authService.SendVerificationMail().then(( res => {
                    console.log('sent verification email', res);
                    this.goToLogin();
                }));
            }));
        });
    }
    signUpWithPhone(phoneNumber, password){
    }

    goToLogin() {
        this.router.navigateByUrl('/sign-in');
    }

}
