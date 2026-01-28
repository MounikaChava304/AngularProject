import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {

  transform(input: number):string {
   let res = '';
   let rem = input % 10;
   switch(rem){
    case 1 : res = input + 'st'; break;
    case 2 : res = input + 'nd'; break;
    case 3 : res = input + 'rd'; break;
    default : res = input + 'th'; break;
   }
   return res;
  }

}
