import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'before', loadComponent: () => import('./before/before.component').then(m => m.BeforeComponent)},
    {path: 'after', loadComponent: () => import('./after/after.component').then(m => m.AfterComponent)},
    {path: '', redirectTo: 'before', pathMatch: 'full'}
];
