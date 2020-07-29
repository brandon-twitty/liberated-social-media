import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFriendPageRoutingModule } from './create-friend-routing.module';

import { CreateFriendPage } from './create-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateFriendPageRoutingModule
  ],
  declarations: [CreateFriendPage]
})
export class CreateFriendPageModule {}
