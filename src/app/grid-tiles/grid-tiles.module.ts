import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridTilesPage } from './grid-tiles.page';
import {HeaderModule} from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: GridTilesPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderModule,
        RouterModule.forChild(routes),
    ],
  declarations: [GridTilesPage]
})
export class GridTilesPageModule {}
