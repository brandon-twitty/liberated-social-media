import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {OffcanvasService} from '../shared/services/offcanvas.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(
      public authService: AuthenticationService, public offcanvasService: OffcanvasService
  ) { }

  ngOnInit() {
  }

}
