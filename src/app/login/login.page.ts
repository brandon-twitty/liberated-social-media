import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService,
              public router: Router) { }

  ngOnInit() {
  }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
        .then((res) => {
            this.router.navigate(['upload-profile-img']);
          });

  }
  signUp(){
      this.router.navigate(['registration']);
  }

}
