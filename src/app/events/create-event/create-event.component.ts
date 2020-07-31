import { Component, OnInit } from '@angular/core';
import {AfterHoursEvent} from '../../models/afterHoursEvent';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import {Camera, CameraResultType, CameraSource} from '@capacitor/core';
import {Router} from '@angular/router';
import {PhotoService} from '../../photo.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  afterEvent: AfterHoursEvent = new AfterHoursEvent();
  eventForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder,  private router: Router, private photoService: PhotoService) {
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
      limitInvites: [''],
      socialMediaLink: [''],
        eventDescription: ['']
    });
  }
  prepareEventObject(){
    this.afterEvent.euid = uuidv4();
    console.log(this.afterEvent.euid);
  }
  creatEvent(){
      console.log('event created');
  }
  nextScreen(){
      this.router.navigateByUrl('events'); // test routing
  }
   takeEventPic(){
      this.photoService.takePicture();
   }
}


