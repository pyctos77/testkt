import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[multiplicar]',
  standalone:true

})
export class MultiplicarDirective {

  // private templateRef = inject(TemplateRef<any>);
  // private viewContainer = inject(ViewContainerRef);

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
 
  }
 
  @Input() set multiplicar(numero: number) {
    for (var i = 0; i < numero; i++)
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
 
  }
 


}
