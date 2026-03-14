import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Etudiant } from '../../models/etudiant.model';
import { DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-carte-etudiant',
  imports: [NgClass,DecimalPipe],
  templateUrl: './carte-etudiant.html',
  styleUrl: './carte-etudiant.css'
})
export class CarteEtudiant {
  @Input() etudiant!: Etudiant;
  @Input() moyenne: number = 0;
  @Output() suppression = new EventEmitter<number>();

  onSupprimer() {
    this.suppression.emit(this.etudiant.id);
  }

  getClasseCarte(): string {
    if (this.moyenne < 10) return 'carte-echec';
    if (this.moyenne < 14) return 'carte-passable';
    return 'carte-reussite';
  }
}