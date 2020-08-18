import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Filesystem} from '@capacitor/core';
import { Capacitor, Plugins,  FilesystemDirectory } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }
  public async takePicture() {
    const options = {
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      allowEditing: true,
    };
    const originalPhoto = await Camera.getPhoto(options);
    const photoInTempStorage = await Filesystem.readFile({ path: originalPhoto.path });
      // this.afterEvent.eventImage = profilePicture.base64String;
    let date = new Date(),
        time = date.getTime(),
        fileName = time + ".jpeg";

    await Filesystem.writeFile({
      data: photoInTempStorage.data,
      path: fileName,
      directory: FilesystemDirectory.Data
    });

    const finalPhotoUri = await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: fileName
    });

    const photoPath = Capacitor.convertFileSrc(finalPhotoUri.uri);
    console.log('image fucking path', photoPath);

  }
}
