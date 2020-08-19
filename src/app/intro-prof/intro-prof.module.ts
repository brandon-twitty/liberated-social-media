import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroProfPageRoutingModule } from './intro-prof-routing.module';

import { IntroProfPage } from './intro-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroProfPageRoutingModule
  ],
  declarations: [IntroProfPage]
})
export class IntroProfPageModule {}
