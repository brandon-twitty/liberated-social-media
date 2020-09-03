import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfProfilesPageRoutingModule } from './list-of-profiles-routing.module';

import { ListOfProfilesPage } from './list-of-profiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfProfilesPageRoutingModule
  ],
  declarations: [ListOfProfilesPage]
})
export class ListOfProfilesPageModule {}
