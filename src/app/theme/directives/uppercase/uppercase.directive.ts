
import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';
@Directive({
    selector: '[change]'
})
export class UpperCase{

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}
  
    @HostListener('blur') onBlur() {
    this.el.nativeElement.value=this.el.nativeElement.value.toUpperCase();
    }
}