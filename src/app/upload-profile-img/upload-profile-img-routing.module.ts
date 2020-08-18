import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadProfileImgPage } from './upload-profile-img.page';

const routes: Routes = [
  {
    path: '',
    component: UploadProfileImgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadProfileImgPageRoutingModule {}
