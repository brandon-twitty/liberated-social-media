import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from '@angular/router';
import {OffcanvasService} from '../shared/services/offcanvas.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  userData: any;
  constructor(private authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }
  SignIn(email, password) {
    this.authService.SignIn(email.value, password.value)
        .then((res) => {
          this.userData = localStorage.getItem('user');
          console.log('This is the current user:', this.userData);
          if (this.userData.photoURL !== null || this.userData.emailVerified !== false) {
            this.router.navigate(['profile']);
          }
          else {
            this.router.navigate(['/profile']);
          }
        });
  }
}
