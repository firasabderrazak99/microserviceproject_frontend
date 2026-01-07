import { Component, OnInit } from '@angular/core';
import { DonneeMeteoService } from '../../Service/donnee-meteo.service';
import { DonneeMeteo } from '../../models/supervision.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donnee-meteo',
  templateUrl: './donnee-meteo.component.html',
  standalone: true,          // <-- important
  imports: [CommonModule, FormsModule],
  styleUrls: ['./donnee-meteo.component.css']
})
export class DonneeMeteoComponent implements OnInit {

  donnees: DonneeMeteo[] = [];
  currentDonnee: DonneeMeteo = { parcelleId: 0 };

  constructor(private service: DonneeMeteoService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.service.getAll().subscribe(data => this.donnees = data);
  }

  save(): void {
    this.service.create(this.currentDonnee).subscribe(() => {
      this.loadAll();
      this.resetForm();
    });
  }

  delete(id?: number): void {
    if (!id) return;
    this.service.delete(id).subscribe(() => this.loadAll());
  }

  resetForm(): void {
    this.currentDonnee = { parcelleId: 0 };
  }
}
