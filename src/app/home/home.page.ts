import { Component, OnInit } from '@angular/core';
import { F1DataService } from '../services/f1-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  standings: any[] = [];

  constructor(private f1DataService: F1DataService) {
  }

  ngOnInit(): void {
    this.loadStandings();
  }

  loadStandings(): void {
    this.f1DataService.fetchStandings().subscribe((data: any[]) => {
      this.standings = data;
    });
  }
}
