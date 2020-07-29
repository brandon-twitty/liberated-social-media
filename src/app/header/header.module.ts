import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubToolBarComponent} from './sub-tool-bar/sub-tool-bar.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';



@NgModule({
  declarations: [SubToolBarComponent, ToolBarComponent, MenuComponent, FooterComponent],
  exports: [
    ToolBarComponent, MenuComponent, FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class HeaderModule { }
