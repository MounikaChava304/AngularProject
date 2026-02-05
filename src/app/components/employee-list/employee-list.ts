
import { Component, inject, signal } from '@angular/core';
import { EmployeeListService } from '../../services/employee-list-service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeArr:any = signal([]);
  employeeService = inject(EmployeeListService)

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((response: any) => {
      this.employeeArr.set(response);
      console.log(response)
    })
  }
}