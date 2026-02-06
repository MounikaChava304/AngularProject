import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud {

  userService = inject(UserService);


  ngOnInit() {
      this.userService.fetchUsersFromHTTP();
    }
}
