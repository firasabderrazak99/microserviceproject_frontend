import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  DonneeMeteo,
  DonneeCapteur,
  ExploitationSupervisionDTO,
  ParcelleExternalDTO
} from '../models/supervision.model';
export interface Exploitation {
  id: number;
  nom: string;
  region: string;
  localisation: string;
  responsable: string;
  surfaceTotale: number;
}

@Injectable({
  providedIn: 'root'
})
export class SupervisionService {

  private baseUrl = 'http://localhost:8080/api/supervision';

  constructor(private http: HttpClient) { }

  getExploitationsSupervision(): Observable<ExploitationSupervisionDTO[]> {
    return this.http.get<ExploitationSupervisionDTO[]>(
      `${this.baseUrl}/exploitations`
    );
  }

  // detection anomalies
   getAnomalies(): Observable<string[]> {
    console.log('Calling anomalies API...');
    return this.http.get<string[]>(
      `${this.baseUrl}/anomalies`
    );
  }
  getDonneesMeteo(): Observable<DonneeMeteo[]> {
    return this.http.get<DonneeMeteo[]>(
      `${this.baseUrl}/donnees-meteo`
    );
  }

  // 🔹 Données capteurs
  getDonneesCapteur(): Observable<DonneeCapteur[]> {
    return this.http.get<DonneeCapteur[]>(
      `${this.baseUrl}/donnees-capteur/firas`
    );
  }
  getAnomaliesWithDetails(parcelleId: number): Observable<ParcelleExternalDTO> {
    return this.http.get<ParcelleExternalDTO>(
      `${this.baseUrl}/anomalies/with_details/${parcelleId}`
    );
  }

  // 🔹 Lancer la détection
  lancerDetection(): Observable<string> {
    return this.http.post(
      `${this.baseUrl}/anomalies/detect`,
      {},
      { responseType: 'text' }
    );
  }
}
