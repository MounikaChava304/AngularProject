import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
//  trying to create an instance of ElementRef class inside highlight class
//Dependency Injection - Highlight class is dependent on ElementRef Class
  constructor(private ele:ElementRef) { 
    console.log(ele);
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.ele.nativeElement.style.color = 'red';
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.ele.nativeElement.style.color = '';
    this.ele.nativeElement.style.backgroundColor = '';
  }

}
