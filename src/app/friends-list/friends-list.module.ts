import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendsListPageRoutingModule } from './friends-list-routing.module';

import { FriendsListPage } from './friends-list.page';
import {HeaderModule} from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FriendsListPageRoutingModule,
        HeaderModule
    ],
  declarations: [FriendsListPage]
})
export class FriendsListPageModule {}
