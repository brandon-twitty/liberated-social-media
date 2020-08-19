import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroProfPage } from './intro-prof.page';

const routes: Routes = [
  {
    path: '',
    component: IntroProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroProfPageRoutingModule {}
