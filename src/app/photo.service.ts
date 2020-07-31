import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }
  public async takePicture() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
     // this.afterEvent.eventImage = profilePicture.base64String;
    } catch (error) {
      console.error(error);
    }
  }
}
