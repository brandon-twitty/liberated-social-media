import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OffcanvasService {

  constructor(private menu: MenuController, public router: Router) { }

  open() {
    this.menu.enable(true, 'offcanvas-menu');
    this.menu.open('offcanvas-menu');
    console.log('Triggered');
  }
  goToRegistration(){
    console.log('going to registration page');
    this.router.navigateByUrl('registration');
  }
  goToDashboard(){
    this.router.navigate(['dashboard']);
  }
  goToOrderCards(){
    this.router.navigate(['order-cards']);
  }
  goToOrderHistory(){
    this.router.navigate(['order-history']);
  }
  goToBillingHistory(){
    this.router.navigate(['billing-history']);
  }
  goToSupport(){
    this.router.navigate(['support']);
  }
}
