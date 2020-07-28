import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.sideMenu();
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    sideMenu() {
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
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map