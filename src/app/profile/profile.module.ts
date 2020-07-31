import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {CreateComponent} from './create/create.component';
import {HeaderModule} from '../header/header.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {AngularFireStorageModule,
    AngularFireStorageReference,
    AngularFireUploadTask,
    } from '@angular/fire/storage';
import {BrowserModule} from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environment';
import {AppModule} from '../app.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        HeaderModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AppModule
    ],
  declarations: [ProfilePage, CreateComponent],

})
export class ProfilePageModule {}
