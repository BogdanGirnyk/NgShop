import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeBackGround();
  }

  private setBackGround() {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'yellow');
  }

  private removeBackGround() {
    this.renderer.removeStyle(this.element.nativeElement, 'background');
  }
}
