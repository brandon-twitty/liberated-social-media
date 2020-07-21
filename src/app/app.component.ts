import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu(){
    this.navigate = [
      {
        title: 'Detailed Profile',
        url: '/detailed-profile',
        icon: 'person-remove-outline'
      },
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'home'
      },
      {
        title: 'Create Profile',
        url: '/create-profile',
        icon: 'home'
      },
      {
        title: 'Order Cards',
        url: '/create-cards',
        icon: 'barcode-outline'
      },
      {
        title: 'My Connections',
        url: '/my-connections',
        icon: 'contacts'
      },
      {
        title: 'Login',
        url: '/register',
        icon: 'home'
      },
    ];
  }
}
