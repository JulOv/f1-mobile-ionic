import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1DataService } from '../services/f1-data.service';
import { ModalController } from '@ionic/angular';
import { AddResultModalComponent } from '../components/add-result-modal/add-result-modal.component';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.page.html',
  styleUrls: ['./race-details.page.scss'],
  standalone: false
})
export class RaceDetailsPage implements OnInit {
  raceId!: number;
  results: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private f1DataService: F1DataService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.raceId = +this.route.snapshot.paramMap.get('id')!;
    this.loadRaceResults();
  }


  loadRaceResults(): void {
    this.f1DataService.fetchRaceResults(this.raceId).subscribe((data: any[]) => {
      this.results = data;
    });
  }

  async addResult(): Promise<void> {
    const modal = await this.modalController.create({
      component: AddResultModalComponent,
      componentProps: { raceId: this.raceId },
    });
    modal.onDidDismiss().then(() => this.loadRaceResults());
    await modal.present();
  }
}
