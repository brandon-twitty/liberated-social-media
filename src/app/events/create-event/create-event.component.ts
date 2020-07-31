import { Component, OnInit } from '@angular/core';
import {AfterHoursEvent} from '../../models/afterHoursEvent';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import {Camera, CameraResultType} from '@capacitor/core';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  afterEvent: AfterHoursEvent = new AfterHoursEvent();
 eventForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.CreateEventForm();
    this.prepareEventObject();
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
    this.afterEvent.euid = uuidv4();
    console.log(this.afterEvent.euid);
  }
    async takePicture() {
        try {
            const profilePicture = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Base64,
            });
            this.afterEvent.eventImage = profilePicture.base64String;
        } catch (error) {
            console.error(error);
        }
    }
}


