import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegVTwoPageRoutingModule } from './reg-v-two-routing.module';

import { RegVTwoPage } from './reg-v-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegVTwoPageRoutingModule
  ],
  declarations: [RegVTwoPage]
})
export class RegVTwoPageModule {}
