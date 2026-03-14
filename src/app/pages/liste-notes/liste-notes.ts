import { Component, signal } from '@angular/core';
import { CarteEtudiant } from '../../components/carte-etudiant/carte-etudiant';
import { FormsModule } from '@angular/forms';
import { Etudiant } from '../../models/etudiant.model';

@Component({
  selector: 'app-liste-notes',
  imports: [ CarteEtudiant,FormsModule],
  templateUrl: './liste-notes.html',
  styleUrl: './liste-notes.css',
})
export class ListeNotes {
filtreClasse: string ='tous';
etudiantSignal =signal<Etudiant[]>([
  {id:1 ,nom: 'Mbem',   prenom: 'rufin', notes:[12,15,14], classe: '6eme'},
  {id:2 , nom: 'erita', prenom: 'sonia', notes:[20,16,17], classe: '5eme'},
  {id:3 , nom: 'samaon',prenom: 'galas', notes:[14,16,18], classe: '4eme'},
  {id:4 , nom:'stephane', prenom: 'foumi', notes:[20,19,15], classe:'3eme'},
  { id: 3, nom: 'Foko',    prenom: 'Jean',   notes: [14, 16, 18], classe: '4ème' },
  { id: 4, nom: 'Tagne',   prenom: 'Sophie', notes: [10, 11, 9],  classe: '3ème' },
  { id: 5, nom: 'Kamdem',  prenom: 'Lucas',  notes: [5, 6, 4],    classe: '6ème' },
])


  calculerMoyenne(notes: number[]): number {
    return notes.reduce((a, b) => a + b, 0) / notes.length;
  }


  getEtudiantsFiltres(): Etudiant[]{
  if(this.filtreClasse==='tous'){
    return this.etudiantSignal();
  }
  return this.etudiantSignal().filter(e=> e.classe ===this.filtreClasse);

}
supprimerEtudiant(id: number) {
  this.etudiantSignal.update(liste => liste.filter(e => e.id !== id));
}
}
