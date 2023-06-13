import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[ShakeOnHover]'
})
export class ShakeOnHoverDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.addShakeAnimation();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeShakeAnimation();
  }

  private addShakeAnimation() {
    this.renderer.addClass(this.elementRef.nativeElement, 'spin-animation');
  }

  private removeShakeAnimation() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'spin-animation');
  }

}
