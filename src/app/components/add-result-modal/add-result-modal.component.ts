import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {F1DataService} from "../../services/f1-data.service";

@Component({
  selector: 'app-add-result-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule], // Include necessary modules
  templateUrl: './add-result-modal.component.html',
  styleUrls: ['./add-result-modal.component.scss'],
})
export class AddResultModalComponent implements OnInit {
  @Input() raceId!: number;

  drivers: any[] = [];
  result = { tag_name: '', position: '', fastest_lap: false };

  constructor(private modalController: ModalController, private f1DataService: F1DataService) {}

  ngOnInit(): void {
    this.f1DataService.fetchDrivers().subscribe((data: any[]) => {
      this.drivers = data;
    });
  }

  cancel(): void {
    this.modalController.dismiss();
  }

  add(): void {
    if (this.result.tag_name && this.result.position && this.result.fastest_lap !== undefined) {
      this.f1DataService.addRaceResult(this.raceId, this.result).subscribe(() => {
        this.modalController.dismiss();
      });
    }
  }
}
