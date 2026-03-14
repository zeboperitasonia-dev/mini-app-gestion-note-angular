import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { ListeNotes } from './pages/liste-notes/liste-notes';
import { Statistiques } from './pages/statistiques/statistiques';

export const routes: Routes = [
  { path: '',           redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',    component: Accueil },
  { path: 'liste-notes', component: ListeNotes },
  { path: 'statistiques', component: Statistiques },
  { path: '**',         redirectTo: '/accueil' },
];