import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]'
})
export class HoverCardDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  public hoverCard() {
    this.el.nativeElement.style.width = "310px";
    this.el.nativeElement.style.height = "130px";
  }

  @HostListener("mouseleave")
  public leaveCard() {
    this.el.nativeElement.style.width = "300px";
    this.el.nativeElement.style.height = "125px";
  }

}
