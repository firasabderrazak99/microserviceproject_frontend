import { Component, OnInit } from '@angular/core';
import { DonneeCapteurService } from '../../Service/donnee-capteur.service';
import { DonneeCapteur } from '../../models/supervision.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donnee-capteur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donnee-capteur.component.html',
  styleUrls: ['./donnee-capteur.component.css']
})
export class DonneeCapteurComponent implements OnInit {

  donnees: DonneeCapteur[] = [];

  currentDonnee: DonneeCapteur = {
    parcelleId: 0,
    type: '',
    valeur: 0,
    date: ''
  };

  isPopupOpen = false;

  constructor(private service: DonneeCapteurService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.service.getAll().subscribe(data => {
      this.donnees = data;
    });
  }

  openPopup(): void {
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.resetForm();
  }

  save(): void {
    this.service.create(this.currentDonnee).subscribe(() => {
      this.loadAll();
      this.closePopup();
    });
  }

  delete(id?: number): void {
    if (!id) return;
    this.service.delete(id).subscribe(() => {
      this.loadAll();
    });
  }

  resetForm(): void {
    this.currentDonnee = {
      parcelleId: 0,
      type: '',
      valeur: 0,
      date: ''
    };
  }
}
