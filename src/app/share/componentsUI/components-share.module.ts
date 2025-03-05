import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonExampleComponent } from './button-example/button-example.component';



@NgModule({
  declarations: [],
  imports: [
    HeaderComponent,
    ButtonExampleComponent,
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ButtonExampleComponent,
  ]
})
export class ComponentsShareModule { }
