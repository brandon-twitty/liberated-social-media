import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType} from '@capacitor/core';
import {NavigationExtras, Router} from '@angular/router';
import {PhotoService} from '../../photo.service';

@Component({
  selector: 'app-take-pic',
  templateUrl: './take-pic.component.html',
  styleUrls: ['./take-pic.component.scss'],
})
export class TakePicComponent implements OnInit {
  guestPicture: any;
  constructor(private router: Router, private photoService: PhotoService) { }

  ngOnInit() {}
 /* pictureMeRollin(){
    this.photoService.takePicture().then(r => console.log('twitty rollin', r));
  }*/
  async takePicture() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Base64,

      });
      this.guestPicture = profilePicture.base64String;
      if (this.guestPicture != null) {
        const navigationExtras: NavigationExtras = {
          state: {
            guestPicture: this.guestPicture
          }
        };
        this.router.navigateByUrl('create-friend', navigationExtras);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
