import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  inputs: ['employees'],
  outputs: ['addEvent']
})
export class EmployeeAdd {
 
  newEmployee = {
    eId: null,
    name: '',
    sal: null,
    gender: ''
  };

  addEvent = new EventEmitter();

  addEmployee() {
    this.addEvent.emit(this.newEmployee);
//Reset form
    this.newEmployee = {
      eId: null,
      name: '',
      sal: null,
      gender: 'male'
    };
  }
}
