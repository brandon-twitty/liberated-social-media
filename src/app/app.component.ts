import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import { Plugins } from '@capacitor/core';
import {OffcanvasService} from './shared/services/offcanvas.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  navigate: any;
  constructor(
      private menu: MenuController,
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private menuCtrl: MenuController,
      private router: Router,
      private offCanvas: OffcanvasService
  ) {
    this.sideMenu();
    this.initializeApp();
  }
  open() {
    this.menu.enable(true, 'offcanvas-menu');
    this.menu.open('offcanvas-menu');
    console.log('Triggered');
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
        title: 'Profile',
        url: '/profile',
        icon: 'home'
      },
      {
        title: 'Chat',
        url: '/chat',
        icon: 'chatbubbles-outline'
      },
      {
        title: 'List of Friends',
        url: '/list-of-profiles',
        icon: 'list-outline'
      },
      {
        title: 'Search',
        url: '/search',
        icon: 'search-outline'
      },
    ];
  }
}
