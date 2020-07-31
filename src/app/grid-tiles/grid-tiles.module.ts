import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridTilesPage } from './grid-tiles.page';
import {HeaderModule} from '../header/header.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';

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
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFirestoreModule
    ],
  declarations: [GridTilesPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridTilesPageModule {}
