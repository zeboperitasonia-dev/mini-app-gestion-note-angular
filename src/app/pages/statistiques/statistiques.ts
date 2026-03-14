import { Component, signal, computed } from '@angular/core';
import { NgClass, DecimalPipe } from '@angular/common';
import { Etudiant } from '../../models/etudiant.model';

@Component({
  selector: 'app-statistiques',
  imports: [NgClass, DecimalPipe],
  templateUrl: './statistiques.html',
})
export class Statistiques {

  etudiantsSignal = signal<Etudiant[]>([
    { id: 1, nom: 'Mbem',     prenom: 'Rufin',   notes: [12, 15, 14], classe: '6eme' },
    { id: 2, nom: 'Erita',    prenom: 'Sonia',   notes: [20, 16, 17], classe: '5eme' },
    { id: 3, nom: 'Samaon',   prenom: 'Galas',   notes: [14, 16, 18], classe: '4eme' },
    { id: 4, nom: 'Stephane', prenom: 'Foumi',   notes: [20, 19, 15], classe: '3eme' },
    { id: 5, nom: 'Foko',     prenom: 'Jean',    notes: [14, 16, 18], classe: '4ème' },
    { id: 6, nom: 'Tagne',    prenom: 'Sophie',  notes: [10, 11, 9],  classe: '3ème' },
    { id: 7, nom: 'Kamdem',   prenom: 'Lucas',   notes: [5, 6, 4],    classe: '6ème' },
  ]);

  // Moyenne de chaque étudiant
  moyenneGenerale = computed(() => {
    const etudiants = this.etudiantsSignal();
    const moyennes = etudiants.map(e =>
      e.notes.reduce((a, b) => a + b, 0) / e.notes.length
    );
    return moyennes.reduce((a, b) => a + b, 0) / moyennes.length;
  });

  // Nombre d'étudiants avec moyenne >= 10
  nombreReussites = computed(() =>
    this.etudiantsSignal().filter(e =>
      e.notes.reduce((a, b) => a + b, 0) / e.notes.length >= 10
    ).length
  );

  // Nombre d'étudiants avec moyenne < 10
  nombreEchecs = computed(() =>
    this.etudiantsSignal().filter(e =>
      e.notes.reduce((a, b) => a + b, 0) / e.notes.length < 10
    ).length
  );
}