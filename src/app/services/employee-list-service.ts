import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
 httpClient = inject(HttpClient);

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees').pipe(
      map((responseArr: Employee[]) =>
        responseArr.map(empInfo => {
          const { id, firstName, lastName, sal, gender } = empInfo;
          return new Employee(id, firstName, lastName, sal, gender);
        })
      )
    );
  }
}
