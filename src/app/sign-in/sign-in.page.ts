import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }
  signIn(email, password){
    this.authService.SignIn(email.value, password.value).then((res) => {
      this.router.navigateByUrl('profile');
    });
  }
}
