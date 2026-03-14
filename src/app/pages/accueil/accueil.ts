import { Component, signal } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
nomProfesseur:string ='Mme. ZEBOP';
nombreEtudiants = signal(10);
constructor(private router :Router){}
allerVersNotes(){
  this.router.navigate(['/liste-notes']);
}
}
