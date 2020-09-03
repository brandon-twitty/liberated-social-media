import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfProfilesPage } from './list-of-profiles.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfProfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfProfilesPageRoutingModule {}
