import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisionService } from '../../Service/supervision.service';
import { ExploitationSupervisionDTO } from '../../models/supervision.model';

@Component({
  selector: 'app-supervision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Supervision</h2>

    <button (click)="detect()">Detect anomalies</button>
    <p>{{ message }}</p>

    <ul>
      <li *ngFor="let exp of exploitations">
        {{ exp.nom }} - {{ exp.localisation }}
      </li>
    </ul>
  `
})
export class SupervisionComponent implements OnInit {

  exploitations: ExploitationSupervisionDTO[] = [];
  message = '';

  constructor(private supervisionService: SupervisionService) {}

  ngOnInit(): void {
    this.supervisionService.getExploitationsSupervision().subscribe({
      next: data => this.exploitations = data,
      error: err => console.error(err)
    });
  }

  detect(): void {
    this.supervisionService.lancerDetection().subscribe({
      next: msg => this.message = msg,
      error: err => console.error(err)
    });
  }
}
