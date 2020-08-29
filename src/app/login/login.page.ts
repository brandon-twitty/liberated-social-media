import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from '@angular/router';
import {AdminSdkService} from '../shared/services/admin-sdk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService, public adminService: AdminSdkService,
              public router: Router) { }

  ngOnInit() {
  }
    logIn(email, password) {
        this.authService.SignIn(email.value, password.value)
            .then((res) => {
                if (this.authService.isEmailVerified) {
                    this.router.navigate(['dashboard']);
                } else {
                    window.alert('Email is not verified');
                    return false;
                }
            }).catch((error) => {
            window.alert(error.message);
        });
    }
    goToRegistration(){
        this.router.navigateByUrl('/registration');
    }

}
