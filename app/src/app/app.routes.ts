import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'deudas', pathMatch: 'full' },
    {path: 'deudas', loadComponent: () => import('./pages/deudas/deudas.page').then(m => m.DeudasPage) }
];
