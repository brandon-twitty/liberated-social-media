import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFriendPage } from './create-friend.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFriendPageRoutingModule {}
