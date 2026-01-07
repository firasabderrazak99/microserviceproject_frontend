import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcelle } from '../models/exploitation.model';

@Injectable({
  providedIn: 'root'
})
export class ParcelleService {

  private baseUrl = 'http://localhost:8080/api/exploitations/parcelles';

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Parcelle> {
    return this.http.get<Parcelle>(`${this.baseUrl}/${id}`);
  }
}
