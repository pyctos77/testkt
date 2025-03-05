import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Character } from '../../../../core/models/character.model';

@Component({
  selector: 'app-prudctos-list',
  imports: [],
  templateUrl: './prudctos-list.component.html',
  styleUrl: './prudctos-list.component.scss'
})
export class PrudctosListComponent {

  public characters!: Character[];
  
  private productService = inject(ProductsService);

  // constructor(public productService1 : ProductsService){

  // }

  ngOnInit(){

    console.log('success');
    
    this.productService.getAll().subscribe( res => {
      this.characters = res;

      console.log( this.characters);
    });
  }
}
