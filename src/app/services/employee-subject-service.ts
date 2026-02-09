import { inject, Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeSubjectModel } from '../models/employee-subject';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSubjectService {
  private employeeUrl = "http://localhost:3000/employees";

  employeeSubject = new Subject<EmployeeSubjectModel[]>();
  httpClient = inject(HttpClient);

  getEmployees() {
    this.httpClient.get<EmployeeSubjectModel[]>(this.employeeUrl).subscribe(
      employee => {
        this.employeeSubject.next(employee);
      })
  }

  addEmployee(employee: EmployeeSubjectModel) {
    if (!employee.id || employee.id <= 0) {
      Swal.fire('Invalid ID', 'Employee ID must be a positive number', 'error');
      return;
    }

    this.httpClient.get<EmployeeSubjectModel[]>(this.employeeUrl).subscribe({
      next: (employees) => {


        if (employees.find(e => e.id === employee.id)) {
          Swal.fire('Duplicate ID', 'Employee ID already exists!', 'error');
          return;
        }


        this.httpClient.post<EmployeeSubjectModel>(this.employeeUrl, employee).subscribe({
          next: () => {
            this.getEmployees();
            Swal.fire('Added!', 'Employee has been added.', 'success');
          },
          error: (err) => {
            console.error('Error adding employee', err);
            Swal.fire('Error', 'Failed to add employee', 'error');
          }
        });
      },
      error: (err) => console.error('Error fetching employees', err)
    });
  }

  deleteEmployee(id: number) {
    if (!confirm('Are you sure you want to delete this user?')) return;

    this.httpClient.delete(`${this.employeeUrl}/${id}`).subscribe({
      next: () => {
        this.getEmployees();
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
      },
      error: (err) => console.error('Error deleting employee', err)
    });
  }

}
