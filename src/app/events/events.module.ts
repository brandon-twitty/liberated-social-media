import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import {CreateEventComponent} from './create-event/create-event.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      HttpClientModule,
      ReactiveFormsModule,
    EventsPageRoutingModule
  ],
  declarations: [EventsPage, CreateEventComponent]
})
export class EventsPageModule {}
