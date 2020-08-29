import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServiceWorkerModule, SwRegistrationOptions} from '@angular/service-worker';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environment';
import {AuthenticationService} from './shared/services/authentication.service';

import {FileSizeFormatPipe} from './file-size-format.pipe';
import { UiModule } from './ui/ui.module';
import {AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  } from '@angular/fire/storage';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {OffcanvasComponent} from './shared/components/offcanvas/offcanvas.component';
import {TextComponent} from './shared/components/fields/text/text.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FileSizeFormatPipe, NavbarComponent, OffcanvasComponent, TextComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(), AppRoutingModule,
    FontAwesomeModule,
      FormsModule,
      HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
      AngularFireStorageModule,
    AngularFirestoreModule,
    UiModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({enabled: environment.production, registrationStrategy: 'registerImmediately'}),
    },
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }

}
