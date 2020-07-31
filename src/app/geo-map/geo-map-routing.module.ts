import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoMapPage } from './geo-map.page';

const routes: Routes = [
  {
    path: '',
    component: GeoMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoMapPageRoutingModule {}
