import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class FooterComponent  {

  protected readonly RouterLink = RouterLink;
}
