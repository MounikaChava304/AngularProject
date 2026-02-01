import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

  employees: any[] = [];
  selectedGender: string = 'all';
  //Injected Employee Service and ChangeDetectorRef as dependencies
  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef) {

  }
  //On Initialization of the component, fetches data from displayEmployees method  to display data
  ngOnInit() {
    this.displayEmployees();
  }
  //Method to display employees list based on selected gender in dropdown
  displayEmployees() {
    if (this.selectedGender === 'all') {
      this.employees = this.employeeService.getAllEmployees();
    } else if (this.selectedGender === 'male') {
      this.employees = this.employeeService.getMaleEmployees();
    } else if (this.selectedGender === 'female') {
      this.employees = this.employeeService.getFemaleEmployees();
    }
    this.cdr.markForCheck(); //Used to load changes/refresh page whenever this method is invoked
  }
}

