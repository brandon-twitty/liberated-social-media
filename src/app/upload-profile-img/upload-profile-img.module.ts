import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadProfileImgPageRoutingModule } from './upload-profile-img-routing.module';

import { UploadProfileImgPage } from './upload-profile-img.page';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireStorageModule,
      ReactiveFormsModule,
    UploadProfileImgPageRoutingModule
  ],
  declarations: [UploadProfileImgPage],
  exports: []
})
export class UploadProfileImgPageModule {}
