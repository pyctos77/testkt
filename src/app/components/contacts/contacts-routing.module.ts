import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailComponent } from './pages/contacts-detail/contacts-detail.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: ':id',
    component: ContactsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
