import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { RomanPipe } from '../../custom-pipes/roman-pipe';
import { AgePipe } from '../../custom-pipes/age-pipe';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { SearchEmployeePipe } from '../../custom-pipes/search-employee-pipe';
import { MySortPipe } from '../../custom-pipes/my-sort-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule, FormsModule, OrdinalPipe, RomanPipe, AgePipe, SalutationPipe, SearchEmployeePipe, MySortPipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  userName: string = 'saCHin teNDulKar';
  mySal: number = 5000;
  dateObj = new Date();
  user = { id: 101, name: 'sanjay', role: 'Trainer', salary: 5000 };
  cars = ['Tata', 'Honda', 'Maruti', 'Toyota', 'Volvo'];
  num = interval(1000);

  cardinal: number = 21;
  romanInteger: number = 1;
  birthDate: string = '01-01-1900';
  searchText: string = '';
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ]
  numArr = [20,50,10,30,40];
}
