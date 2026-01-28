import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
})
export class SalutationPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    let res = '';
    if (gender === 'male') {
      res = 'Mr. ' + name;
    } else if (gender === 'female') {
      res = 'Ms. ' + name
    } else {
      res = name;
    }
    return res;
  }

}
