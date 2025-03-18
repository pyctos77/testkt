import { CommonModule } from '@angular/common';
import { Component, Input ,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ContentChild, 
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HijoComponent } from '../../share/componentsUI/app-hijo/app-hijo.component';

@Component({
  selector: 'app-life-cycle',
  imports: [ CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
})
export class LifeCycleComponent  implements
OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy

{
  @Input()
  public name: string = '';

  count = 1;

  
  @ViewChild('newVal') valorSpan!: ElementRef;
  @ContentChild('contenidoPadre') content!: ElementRef;
  @ContentChild(HijoComponent) hijoContent!:HijoComponent;
  
  constructor() {
    console.log(`constructor`);
  }
  ngOnChanges(s : SimpleChanges) {
    // console.log(`ngOnChanges - count is`);
    // console.log(s);
  }
  ngOnInit() {
    // console.log(`ngOnInit  - count is ${this.count}`);
    // console.log('ngOnInit');

    // console.log('span element ngOnInit');
    // console.log(this.valorSpan?.nativeElement?.textContent);
  }

  ngDoCheck() {
    // console.log('ngDoCheck parent');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log(this.content.nativeElement.textContent);
    console.log(this.hijoContent.description);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
    // console.log('span element ngAfterViewInit');
    // console.log(this.valorSpan?.nativeElement?.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


  addCount(): void {
    this.count += 10;
    // this.changeNameWithNums = this.changeNameWithNums+ this.count;
  }
}
