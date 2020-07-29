import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grid-tiles',
  templateUrl: './grid-tiles.page.html',
  styleUrls: ['./grid-tiles.page.scss'],
})
export class GridTilesPage implements OnInit {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
    ngOnInit() {
    }

}
