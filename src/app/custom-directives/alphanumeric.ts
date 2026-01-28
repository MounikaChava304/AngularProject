import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]',
})
export class Alphanumeric {

  // This is using Element Reference -- access dom elements directly and modifies the DOM elements
  // constructor(private ele: ElementRef) { }

  // @HostListener('input', ['$event'])
  // inputHandler(event: any) {
  //   let regex = new RegExp(/^[a-z0-9]+$/);
  //   let rawValue = event.target.value;
  //   let sanitizedValue = rawValue.replace(/[^a-zA-Z0-9]/g, '');
  //   if (!regex.test(rawValue)) {
  //     this.ele.nativeElement.value = sanitizedValue;
  //   } else {
  //     this.ele.nativeElement.value = rawValue;
  //   }
  // }

  //This is using renderer2 -- more secure than element ref, abstraction of dom elements(like getters and setters)
  constructor(private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    let rawValue = event.target.value;
    let sanitizedValue = rawValue.replace(/[^a-zA-Z0-9 ]/g, '');
    console.log(sanitizedValue)
    if (rawValue !== sanitizedValue) {
      this.renderer.setProperty(event.target, 'value', sanitizedValue)
    }
  }
}
