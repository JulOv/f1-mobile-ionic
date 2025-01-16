import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RacesPageRoutingModule } from './races-routing.module';
import { RacesPage } from './races.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacesPageRoutingModule,
  ],
  declarations: [RacesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RacesPageModule {}
