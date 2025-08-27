import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home),
        title: 'Home'
    },
    {
        path: 'injector',
        pathMatch: 'full',
        loadComponent: () => import('./Injector/Injector').then(m => m.Injector),
        title: 'Injection'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
