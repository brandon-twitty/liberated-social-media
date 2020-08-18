import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFriendPage } from './create-friend.page';
import {TakePicComponent} from './take-pic/take-pic.component';

const routes: Routes = [
  {
    path: '',
    component: CreateFriendPage
  },
  {
    path: 'photo',
    component: TakePicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFriendPageRoutingModule {}
