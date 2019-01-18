import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appGreyscale]'
})
export class GreyscaleDirective {

    @Input() appGreyscale = "100%";

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.style.filter = `grayscale(${this.appGreyscale})`;
        this.el.nativeElement.style.transition = "filter 1s";
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.style.filter = "grayscale(0%)";
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.filter = `grayscale(${this.appGreyscale})`;
    }

}
