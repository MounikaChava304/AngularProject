import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeSubjectService } from '../../services/employee-subject-service';
import { EmployeeSubjectModel } from '../../models/employee-subject';

@Component({
  selector: 'app-employee-subject',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-subject.html',
  styleUrl: './employee-subject.css',
})
export class EmployeeSubject {

  empService = inject(EmployeeSubjectService);

  // signals
  employees = signal<EmployeeSubjectModel[]>([]);

  // form fields
  id = signal<number | null>(null);
  firstName = signal('');
  lastName = signal('');
  sal = signal<number | null>(null);
  gender = signal('');
  email = signal('');

  ngOnInit() {
    this.empService.employeeSubject.subscribe((data) => {
      this.employees.set(data);
    });
    this.empService.getEmployees();
  }

  addEmployee() {
    if (!this.id() || !this.firstName() || !this.lastName() || !this.sal() || !this.gender() || !this.email())
      return;

    const emp = new EmployeeSubjectModel(
      this.id()!,
      this.firstName(),
      this.lastName(),
      this.sal()!,
      this.gender(),
      this.email()
    );

    this.empService.addEmployee(emp);

    // reset form
    this.id.set(null);
    this.firstName.set('');
    this.lastName.set('');
    this.sal.set(null);
    this.gender.set('');
    this.email.set('');
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id);
  }

  clearAll() {
    this.id.set(null);
    this.firstName.set('');
    this.lastName.set('');
    this.sal.set(null);
    this.gender.set('');
    this.email.set('');
  }
}
