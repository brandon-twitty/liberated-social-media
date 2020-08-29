import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFriendPageRoutingModule } from './create-friend-routing.module';

import { CreateFriendPage } from './create-friend.page';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {FileSizeFormatPipe} from '../file-size-format.pipe';
import {TakePicComponent} from './take-pic/take-pic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    CreateFriendPageRoutingModule
  ],
  declarations: [CreateFriendPage,  TakePicComponent]
})
export class CreateFriendPageModule {}
