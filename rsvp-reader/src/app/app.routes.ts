import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'RSVP Reader - Ana Sayfa'
  },
  {
    path: 'reading',
    loadComponent: () => import('./pages/reading/reading.component').then(m => m.ReadingComponent),
    title: 'RSVP Reader - Okuma'
  },
  {
    path: 'library',
    loadComponent: () => import('./pages/library/library.component').then(m => m.LibraryComponent),
    title: 'RSVP Reader - Kütüphane'
  },
  {
    path: '**',
    redirectTo: ''
  }
];