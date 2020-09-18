import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @Input('appClick') border: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click')
  onClick() {
    if (!this.el.nativeElement.style.border) {
      this.renderer.setStyle(this.el.nativeElement, 'border', `${this.border}px solid black`);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }
}
