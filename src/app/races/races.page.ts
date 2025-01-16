import { Component, OnInit } from '@angular/core';
import { F1DataService } from '../services/f1-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
  standalone: false
})
export class RacesPage implements OnInit {
  races: any[] = [];

  constructor(private f1DataService: F1DataService, private router: Router) {}

  ngOnInit(): void {
    this.loadRaces();
  }

  loadRaces(): void {
    this.f1DataService.fetchRaces().subscribe((data: any[]) => {
      this.races = data;
    });
  }

  goToRaceDetails(raceId: number): void {
    this.router.navigate(['/race-details', raceId]);
  }
}
