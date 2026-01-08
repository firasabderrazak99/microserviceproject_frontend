import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

import { SupervisionService } from '../../Service/supervision.service';

@Component({
  selector: 'app-anomalies',
  standalone: true,
  imports: [CommonModule, HttpClientModule,NgIf,NgFor],
  templateUrl: './anomalies.component.html',
  styleUrls: ['./anomalies.component.css']
})
export class AnomaliesComponent implements OnInit {

  anomalies: string[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private service: SupervisionService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAnomalies();
  }

  loadAnomalies(): void {
    this.loading = true;
    this.service.getAnomalies()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
    next: (data) => {
        console.log("Anomalies received:", data);
      this.anomalies = data;
      this.cd.detectChanges();  
    },
    error: (err) => { this.error = 'Erreur chargement anomalies'; console.error(err); }
  });
  }

  getClass(anomaly: string): string {
    const a = anomaly.toLowerCase();
    if (a.includes('danger')) return 'danger';
    if (a.includes('alert')) return 'alert';
    return 'ok';
  }
}
