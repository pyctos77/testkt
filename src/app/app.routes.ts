import { Routes } from '@angular/router';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { authGuard } from './core/guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./components/contacts/contacts.module').then(
        (m) => m.ContactsModule
      )
  },

  {
    path: 'formGroup',
    loadComponent: () =>
      import('./components/form-group/form-group.component').then(
        (m) => m.FormGroupComponent
      ),
      // canActivate: [authGuard] 
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/productos/pages/prudctos-list/prudctos-list.component').then(
        (m) => m.PrudctosListComponent
      ),
  },
  {
    path: 'transformhtml',
    loadComponent: () =>
      import('./components/transformhtml/transformhtml.component').then(
        (m) => m.TransformhtmlComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/no-found/no-found.component').then(
        (m) => m.NoFoundComponent
      ),
  },
];
