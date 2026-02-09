import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ]
  //Method to return list of all employees
  getAllEmployees() {
    return this.employees;
  }
  //Method to filter and return only male employees
  getMaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'male');
  }
  //Method to filter and return only female employees
  getFemaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'female');
  }
}
