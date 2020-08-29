import { Component, OnInit } from '@angular/core';
import { OffcanvasService } from '../../services/offcanvas.service';

import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
})
export class OffcanvasComponent implements OnInit {

  constructor(
    private offcanvas: OffcanvasService, public authService: AuthenticationService, public router: Router
  ) { }

  ngOnInit() {}
  goToRegistration(){
    this.router.navigateByUrl('register');
  }
  goToDashboard(){
    this.router.navigateByUrl('dashboard');
  }
  goToOrderCards(){
    this.router.navigateByUrl('order-cards');
  }
  goToOrderHistory(){
    this.router.navigateByUrl('order-history');
  }
  goToBillingHistory(){
    this.router.navigateByUrl('billing-history');
  }
  goToSupport(){
    this.router.navigateByUrl('support');
  }
}
