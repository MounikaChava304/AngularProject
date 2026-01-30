import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employee-parent',
  imports: [EmployeeTable, EmployeeAdd],
  templateUrl: './employee-parent.html',
  styleUrl: './employee-parent.css',
})
export class EmployeeParent {
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ]

  deleteEmployeeById(empId: number) {
    this.employees = this.employees.filter(emp => emp.eId !== empId);
  }

  addEmployee(employee: any) {
    this.employees = [...this.employees, employee];
  }
}
