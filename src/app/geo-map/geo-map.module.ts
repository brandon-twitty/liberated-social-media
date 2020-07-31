import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoMapPageRoutingModule } from './geo-map-routing.module';

import { GeoMapPage } from './geo-map.page';
import {HeaderModule} from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GeoMapPageRoutingModule,
        HeaderModule
    ],
  declarations: [GeoMapPage]
})
export class GeoMapPageModule {}
