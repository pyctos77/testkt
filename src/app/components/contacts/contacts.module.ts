import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  
  imports: [ 
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
