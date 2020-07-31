import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import {CreateProfileComponent} from './create/create-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'create',
    component: CreateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
