import { Component, OnInit } from '@angular/core';
import {AfterHoursEvent} from '../../models/afterHoursEvent';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  afterEvent: AfterHoursEvent = new AfterHoursEvent();
 eventForm: FormGroup;
  euid: any;
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.CreateEventForm();
  }

  CreateEventForm() {
    this.eventForm = this.fb.group({
      eventName: [''],
      eventLocation: [''],
      eventStartTime: [''],
      eventOwner: [''],
      cost: [''],
      limitInvites: ['']
    });
  }
  prepareEventObject(){
    this.afterEvent.euid = new uuid();
  }
}


