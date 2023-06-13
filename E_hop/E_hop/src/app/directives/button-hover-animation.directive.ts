import { Directive , ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[ButtonHoverAnimation]'
})
export class ButtonHoverAnimationDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement, 'spin-animation');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'spin-animation');
  }
}
