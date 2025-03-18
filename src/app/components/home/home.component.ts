import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LifeCycleComponent } from '../life-cycle/life-cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HijoComponent } from '../../share/componentsUI/app-hijo/app-hijo.component';

@Component({
  selector: 'app-home',
  imports: [LifeCycleComponent, CommonModule, ReactiveFormsModule, FormsModule, HijoComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

  tiempoRealName:string ='dsds';

  
  @ViewChild('new') valorSpan!: ElementRef;


  ngAfterViewInit() {
    // console.log('home------------...................>');
    // console.log('span element ngAfterViewInit');
    // console.log(this.valorSpan?.nativeElement?.textContent);
  }
}
