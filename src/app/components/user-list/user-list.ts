import { Component } from '@angular/core';
import * as data from './user-data.json';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = (data as any).default;

  constructor() {
    console.log(data)
  }
}
