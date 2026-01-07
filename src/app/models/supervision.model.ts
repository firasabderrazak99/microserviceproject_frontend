export interface DonneeCapteur {
  id?: number;
  parcelleId: number;
  type: string;
  valeur: number;
  date?: string;
}


export interface DonneeMeteo {
  id?: number;
  parcelleId: number;
  temperature?: number;
  humiditeAir?: number;
  pluviometrie?: number;
  date?: string; // LocalDateTime → string
}
export interface ExploitationSupervisionDTO {
  id: number;
  nom: string;
  localisation: string; 
}

export interface ParcelleExternalDTO {
  id: number;
  culture: string;
  surface: number;
  etat: string;
  exploitationNom: string;
  localisation: string;
}
