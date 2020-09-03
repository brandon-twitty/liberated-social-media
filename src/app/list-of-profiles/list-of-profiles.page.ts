import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-profiles',
  templateUrl: './list-of-profiles.page.html',
  styleUrls: ['./list-of-profiles.page.scss'],
})
export class ListOfProfilesPage implements OnInit {
  friends: any;
  constructor() { }

  ngOnInit() {
    /*this.friends = [];
    this.getAllUsers(100);*/
}
/*public getAllUsers(nextPageToken) {
 this.friends = admin.auth().listUsers(100, nextPageToken)
     .then((f => {
       f.users.forEach(this.friends);
     }));
}*/

}
