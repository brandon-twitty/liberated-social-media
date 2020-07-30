import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.page.html',
  styleUrls: ['./speaker-details.page.scss'],
})
export class SpeakerDetailsPage implements OnInit {

  slideOpts = {
    autoplay: true
  };

  constructor(private router: Router) { }
 
  ngOnInit() {
  }
  onIconClick(event) {
    event.stopPropagation();
  }
  goToSessionDetails() {
    this.router.navigate(['session-details']);
  }
}
