import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonneeMeteo } from '../models/supervision.model';

@Injectable({
  providedIn: 'root'
})
export class DonneeMeteoService {

  private apiUrl = 'http://localhost:8080/api/supervision/donnees-meteo';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DonneeMeteo[]> {
    return this.http.get<DonneeMeteo[]>(this.apiUrl);
  }

  getById(id: number): Observable<DonneeMeteo> {
    return this.http.get<DonneeMeteo>(`${this.apiUrl}/${id}`);
  }

  create(data: DonneeMeteo): Observable<DonneeMeteo> {
    return this.http.post<DonneeMeteo>(this.apiUrl, data);
  }

  // Update non supporté pour l'instant
  // update(id: number, data: DonneeMeteo): Observable<DonneeMeteo> {
  //   return this.http.put<DonneeMeteo>(`${this.apiUrl}/${id}`, data);
  // }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
