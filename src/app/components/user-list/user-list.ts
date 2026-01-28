import { Component } from '@angular/core';
import * as data from './user-data.json';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = (data as any).default;
  constructor(){
  console.log(data);
  }
}
