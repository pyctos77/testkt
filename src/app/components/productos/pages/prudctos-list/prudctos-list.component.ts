import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Character } from '../../../../core/models/character.model';
import { filter, Observable, Subscription, take, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prudctos-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './prudctos-list.component.html',
  styleUrl: './prudctos-list.component.scss'
})
export class PrudctosListComponent implements OnDestroy {

  public characters!: Character[];
  characters$: Observable<Character[]> | undefined;
 
  private subscription!: Subscription;

  private productService = inject(ProductsService);

  // constructor(public productService1 : ProductsService){

  // }

  ngOnInit(){

    console.log('success');
    
    // this.characters$ = this.productService.getAll();

   this.subscription = this.productService.getAll().pipe(
    // take(1),
    
    filter( (tags:Character[]) => {
      
      return tags[1].id === 1}),
    tap((x: Character[]) =>{
     
      console.log('tap');  
      console.log(x);
    }),
    
    ).subscribe( res => {
      console.log('res');
      console.log(res);
      // this.characters = res;

      // console.log( this.characters);
    });
  }


  ngOnDestroy (){

    console.log('salida');
    this.subscription.unsubscribe();
  }
}
