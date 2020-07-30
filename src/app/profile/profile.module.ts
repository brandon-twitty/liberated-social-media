import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {CreateComponent} from './create/create.component';
import {HeaderModule} from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        HeaderModule
    ],
  declarations: [ProfilePage, CreateComponent]
})
export class ProfilePageModule {}
