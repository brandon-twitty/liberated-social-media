import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType} from '@capacitor/core';

@Component({
  selector: 'app-take-pic',
  templateUrl: './take-pic.component.html',
  styleUrls: ['./take-pic.component.scss'],
})
export class TakePicComponent implements OnInit {
  guestPicture: any;
  constructor() { }

  ngOnInit() {}
  async takePicture() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.guestPicture = profilePicture.base64String;
    } catch (error) {
      console.error(error);
    }
  }
}
