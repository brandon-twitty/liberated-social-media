import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ProfilePage } from './profile.page';
import {CreateProfileComponent} from './create/create-profile.component';
import {HeaderModule} from '../header/header.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderModule,
        FontAwesomeModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFirestoreModule
    ],
  declarations: [ProfilePage, CreateProfileComponent]

})
export class ProfilePageModule {}
