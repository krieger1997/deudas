import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',loadComponent: () => import('./pages/index/index.page').then(m => m.IndexPage) },
    // { path: 'index', loadComponent: () => import('./pages/deudas/deudas.page').then(m => m.DeudasPage) }
];
