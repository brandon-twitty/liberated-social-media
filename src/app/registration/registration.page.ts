import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor( public authService: AuthenticationService,
               public router: Router) { }

  ngOnInit() {
  }
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
        .then((res) => {
          // Do something here
          this.router.navigate(['verify-email']);
        });
  }
    logIn(email, password) {
        this.authService.SignIn(email.value, password.value)
            .then((res) => {
                    this.router.navigate(['grid-tiles']);
            });

    }
  gotoLogIn(){
      return this.router.navigate(['dashboard']);
  }

}
