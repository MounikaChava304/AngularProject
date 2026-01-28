import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee',
})
export class SearchEmployeePipe implements PipeTransform {

  transform(employees : any[], searchText : string): any[] {
    if(!employees || !searchText){
      return employees;
    }else{
      return employees.filter(emp => emp.name.includes(searchText.toLowerCase()));
    }
  }
}
