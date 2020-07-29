import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridTilesPage } from './grid-tiles.page';
import {HeaderModule} from '../header/header.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

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
        FontAwesomeModule,
        RouterModule.forChild(routes),
    ],
  declarations: [GridTilesPage]
})
export class GridTilesPageModule {}
