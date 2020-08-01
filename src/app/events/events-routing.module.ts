import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';
import {CreateEventComponent} from './create-event/create-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: 'create',
    component: CreateEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
