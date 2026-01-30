import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs: ['employees'],
  outputs: ['deleteEvent']
})
export class EmployeeTable {
  employees: any[] = [];

  deleteEvent = new EventEmitter<number>();
  deleteEmployee(empId: number) {
    this.deleteEvent.emit(empId);
  }
}
