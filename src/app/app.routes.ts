import { Routes } from '@angular/router';
import { FormGroupComponent } from './components/form-group/form-group.component';

export const routes: Routes = [

   
    {
        path: 'formGroup',
        loadComponent: () => import('./components/form-group/form-group.component').then(m => m.FormGroupComponent)
       },
];
