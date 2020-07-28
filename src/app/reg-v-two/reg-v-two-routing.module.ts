import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegVTwoPage } from './reg-v-two.page';

const routes: Routes = [
  {
    path: '',
    component: RegVTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegVTwoPageRoutingModule {}
