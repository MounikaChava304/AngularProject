import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarSolid, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule, CommonModule, FontAwesomeModule, NgxPaginationModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ]
   p=1; //p represents current page

  faEdit = faPenToSquare;
  faDelete = faTrash;
  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;
faStar = this.faStarSolid;
  // faStar = this.faStarRegular;
  // markFavourite() {
  //   this.faStar =
  //     this.faStar === this.faStarRegular
  //       ? this.faStarSolid
  //       : this.faStarRegular;
  // }

  deleteEmployee() {
    Swal.fire('Are you sure ?', 'Do you want to Delete Employee ?');
  }

  selectedEmployee: any = {};

  // Set selected employee to view
  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
  }
  //constructor to add employee into array
  newEmployee: { eId: number, name: string, sal: number, gender: string } = {
    eId: 0,
    name: '',
    sal: 0,
    gender: ''
  }

  addEmployee() {
    //check if any employee details is null, if null throw error.
    if (this.newEmployee.eId === null || this.newEmployee.name === '' || this.newEmployee.sal === null || this.newEmployee.gender === '') {
      Swal.fire('All fields Required', 'Please enter Employee Details', 'error');
      return;
    }
    //Check if employee already exists with employee id, if exists throw error
    if (this.employees.find(emp => emp.eId === this.newEmployee.eId)) {
      Swal.fire('Duplicate ID', 'Employee ID already exists!', 'error');
      return;
    }
    //Add the Employee into Employee Array
    this.employees.push({ ...this.newEmployee });
    //Display success message using snackbar
    new Snackbar('Employee Added Successfully',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );

    //Reset the form after employee is added
    this.newEmployee = { eId: 100, name: '', sal: 5000, gender: '' };
  }

}
