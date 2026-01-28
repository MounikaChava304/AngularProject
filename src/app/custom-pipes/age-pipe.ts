import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {

  transform(input: string | Date): string {
    let res = '';
    let birthDay = new Date(input);
    console.log(birthDay);
    let today = new Date();

    let age = today.getFullYear() - birthDay.getFullYear();
    let month = today.getMonth() - birthDay.getMonth();
    if (month < 0 || today.getDate() < birthDay.getDate()) {
      age--;
    }
    res = age + ' years old';
    return res;
  }

}
