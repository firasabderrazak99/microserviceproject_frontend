import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SupervisionService } from '../../Service/supervision.service';
import { ExploitationSupervisionDTO } from '../../models/supervision.model';

@Component({
  selector: 'app-supervision',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './supervision.component.html',
  styleUrls: ['./supervision.component.css']
})
export class SupervisionComponent implements OnInit {

  exploitations: ExploitationSupervisionDTO[] = [];
  anomalies: number[] = []; // IDs d'exploitations qui ont anomalies
  message = '';
  loading = false;

  constructor(private supervisionService: SupervisionService) {}

  ngOnInit(): void {
    this.loadExploitations();
  }

  loadExploitations(): void {
    this.supervisionService.getExploitationsSupervision().subscribe({
      next: data => this.exploitations = data,
      error: err => console.error("Erreur getExploitations:", err)
    });
  }

  detect(): void {
    this.loading = true;
    this.message = "Détection en cours...";
    this.supervisionService.getAnomalies().subscribe({
      next: data => {
        // récupérer les ids des exploitations qui ont anomalies
        this.anomalies = [];
        data.forEach(anomaly => {
          // exemple: "Température anormale ... sur parcelle: ParcelleExternalDTO(id=2, ..."
          const match = anomaly.match(/ParcelleExternalDTO\(id=(\d+),/);
          if (match) {
            const parcelleId = +match[1];
            if (!this.anomalies.includes(parcelleId)) this.anomalies.push(parcelleId);
          }
        });
        this.message = "Détection terminée";
        this.loading = false;
      },
      error: err => {
        console.error("Erreur detect anomalies:", err);
        this.message = "Erreur lors de la détection";
        this.loading = false;
      }
    });
  }

  hasAnomaly(expId: number): boolean {
    return this.anomalies.includes(expId);
  }
}
