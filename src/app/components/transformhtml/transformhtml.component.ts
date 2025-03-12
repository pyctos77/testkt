import { Component, inject, OnInit } from '@angular/core';
import { Character } from '../../core/models/character.model';
import { Numeros } from '../../core/models/numeros.model';
import { Persona } from '../../core/models/persona.model';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../core/models/User.model';
import { CommonModule, CurrencyPipe, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterEjemploPipe } from '../../share/pipes/filter-ejemplo.pipe';
import { EjemploTransformPipe } from '../../share/pipes/ejemploTransform.pipe';
import { MultiplicarDirective } from '../../share/directives/multiplicar.directive';
import { IluminarColorDirective } from '../../share/directives/iluminar-color.directive';

@Component({
  selector: 'app-transformhtml',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    EjemploTransformPipe,
    MultiplicarDirective,
    IluminarColorDirective,
    FilterEjemploPipe,
    JsonPipe,
    CurrencyPipe,
    RouterModule
  ],
  templateUrl: './transformhtml.component.html',
  styleUrl: './transformhtml.component.scss'
})
export class TransformhtmlComponent  implements OnInit {
  // sintaxis angular 17 a 19
  price: number = 101;
  price2: number = 1;
  type: string = 'audio';

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  user$: Observable<User> = of({
    id: 1,
    name: 'pedro',
    email: 'pedro@gmail.com',
  });

  users$: Observable<User[]> = of([
    {
      id: 1,
      name: 'pedro',
      email: 'pedro@gmail.com',
    },
    {
      id: 1,
      name: 'jorge',
      email: 'jorge@gmail.com',
    },
    {
      id: 1,
      name: 'luis',
      email: 'luis@gmail.com',
    },
  ]);

  searchTerm: string = '';

  numeros: Numeros = {
    uno: 'uno',
    dos: 'dos',
    tres: 'tres',
    cuatro: 'cuatro',
  };
  amount = 123.45;

  items: string[] = ['Manzana', 'Banana', 'Cereza', 'Durazno', 'Fresa', 'Uva'];

  personas: Persona[] = [
    {
      id: 1,
      nombre: 'ejemplo',
      apellido: 'ejemplo apellido',
      dni: 0,
    },
    {
      id: 2,
      nombre: 'jesus',
      apellido: 'apellido',
      dni: 0,
    },
  ];

  constructor(){
    console.log('constructor');
    let product: Character = this.activatedRoute.snapshot.data['product'];
    console.log(product);
  }
  ngOnInit(): void {
   
  }
}