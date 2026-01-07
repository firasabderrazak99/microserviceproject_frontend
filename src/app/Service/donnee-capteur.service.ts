import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonneeCapteur } from '../models/supervision.model';

@Injectable({
  providedIn: 'root'
})
export class DonneeCapteurService {

  private apiUrl = 'http://localhost:8080/api/supervision/donnees-capteur';

  constructor(private http: HttpClient) {}

  // getAll doit pointer sur /firas selon ton controller
  getAll(): Observable<DonneeCapteur[]> {
    return this.http.get<DonneeCapteur[]>(`${this.apiUrl}/firas`);
  }

  getById(id: number): Observable<DonneeCapteur> {
    return this.http.get<DonneeCapteur>(`${this.apiUrl}/${id}`);
  }

  create(data: DonneeCapteur): Observable<DonneeCapteur> {
    return this.http.post<DonneeCapteur>(this.apiUrl, data);
  }

  // Update non supporté
  // update(id: number, data: DonneeCapteur): Observable<DonneeCapteur> {
  //   return this.http.put<DonneeCapteur>(`${this.apiUrl}/${id}`, data);
  // }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
