import { Component, DoCheck, AfterContentChecked, AfterViewChecked, ContentChild, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'app-hijo',
  standalone:true,
  template: `
    <div>
    <h2>Componente Hijo</h2>
   
   </div>
  `,
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

 
  
  @Input() description: string='hello hijo';
  
  
}
