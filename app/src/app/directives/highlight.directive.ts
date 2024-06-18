import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  color = "blue";
  @HostListener('click') onClick(){
    this.color = getColorBasedOnTime();
  }
  @HostBinding('style.background-color') get valid(){
    return this.color;
  } 

  constructor(private element: ElementRef) {}
}

function getNiceColor(hue: number): string{
  console.log(hue)
  return `hsl(${hue}, 50%, 50%)`
}

function getColorBasedOnTime(){
  return getNiceColor(new Date().getTime() % 359);;
}
