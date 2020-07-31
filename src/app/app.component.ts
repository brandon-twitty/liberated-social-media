import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.sideMenu();
    this.initializeApp();
  }
  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd && event.url === '/login') {
        this.menuCtrl.enable(false);
      }
    });
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
        title: 'Search Friends',
        url: '/search',
       // icon: 'barcode-outline'
      },
      {
        title: 'My Connections',
        url: '/my-connections',
      //  icon: 'contacts'
      },
      {
        title: 'Edit Profile',
        url: '/profile/create',
      //  icon: 'home'
      },
      {
        title: 'Geo Locate Users',
        url: '/geo-map',
        //  icon: 'home'
      }
    ];
  }
}
