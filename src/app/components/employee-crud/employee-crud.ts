import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeTable, EmployeeAdd, FontAwesomeModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  constructor(private cdr: ChangeDetectorRef) { }

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ]

  deleteEmployee(empId: number) {
    Swal.fire({
      title: 'Are you sure ?',
      text: 'Do you want to Delete Employee ?'
    }).then(result => {
      if (result.isConfirmed) {
        //Delete employee row from table view
        this.employees = this.employees.filter(emp => emp.eId !== empId);
        //Implemented our own change detection check point to make sure that table is updated after deleting row
        this.cdr.markForCheck();
        //display message using snackbar that Employee is deleted
        new Snackbar('Employee Deleted',
          { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' })
      }
    })
  }

  addEmployee(employee: any) {
    //check if any employee details is null, if null throw error.
    if (!employee.eId || !employee.name || !employee.sal || !employee.gender) {
      Swal.fire('All fields Required', 'Please enter Employee Details', 'error');
      return;
    }
    //Check if employee already exists with employee id, if exists throw error
    if (this.employees.find(emp => emp.eId === employee.eId)) {
      Swal.fire('Duplicate ID', 'Employee ID already exists!', 'error');
      return;
    }
    //Add the Employee into Employee Array
    this.employees = [...this.employees, { ...employee }];
    //Display success message using snackbar
    new Snackbar('Employee Added Successfully',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );

  }
}
