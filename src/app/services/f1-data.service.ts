import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class F1DataService {
  private baseUrl = 'http://127.0.0.1:5001/api';

  constructor(private http: HttpClient) {}

  fetchStandings() {
    return this.http.get<any[]>(`${this.baseUrl}/standings`);
  }

  fetchRaces() {
    return this.http.get<any[]>(`${this.baseUrl}/races`);
  }

  fetchRaceResults(raceId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/races/${raceId}/results`);
  }

  fetchDrivers() {
    return this.http.get<any[]>(`${this.baseUrl}/drivers`);
  }

  addRaceResult(raceId: number, result: any) {
    return this.http.post(`${this.baseUrl}/races/${raceId}/results`, result);
  }


}
