import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIluminarColor]',
  standalone:true
})
export class IluminarColorDirective {
  private el = inject (ElementRef);
  private renderer = inject(Renderer2);

  // constructor(private el: ElementRef, private renderer: Renderer2) {
  // }

@HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
}

@HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('');
}

private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
}


}
