import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UploadImageComponent} from '../shared/upload-image/upload-image.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit {

 data: any = {};
  
  constructor() { }

  ngAfterViewInit(): void {
  }
  
}
