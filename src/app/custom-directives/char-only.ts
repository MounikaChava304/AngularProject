import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]',
})
export class CharOnly {
  @HostBinding('style.background-color')
  myBgColor : string ='';
  
  @HostListener('keyup',['$event'])
  handleKeyUp(event:any){
    let regex = new RegExp(/^[a-z]+$/); //text only
    if(!regex.test(event.target.value)){
      this.myBgColor = 'red'
    }else{
      this.myBgColor = 'green'
    }
  }

}
