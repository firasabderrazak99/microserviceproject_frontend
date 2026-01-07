import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:8080/api/supervision/anomalies'; // endpoint backend

  constructor(private http: HttpClient) { }

 
  getDashboardCounts(): Observable<{ ok: number, alert: number, danger: number }> {
  
    return this.http.get<{ ok: number, alert: number, danger: number }>(`${this.baseUrl}/dashboard-counts`);
  }
}
