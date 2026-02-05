import { Component, inject, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud {

  userService = inject(UserService);
  userArr: WritableSignal<User[]> = signal([]);
  editUserId: WritableSignal<number | null> = signal(null);

  formUser: WritableSignal<User> = signal({
    id: '1',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phoneNumber: '',
    city: '',
    state: ''
  });

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response: User[]) => {
      this.userArr.set(response);
    })
  }

  addUser() {
    const user = this.formUser();
    if(!this.userArr().find(existingUser => user.id == existingUser.id) ){
    this.userService.addUser(user).subscribe({
      next: (newUser) => {
        this.userArr.update(arr => [...arr, newUser]);
        this.resetForm();
      },
      error: (err) => console.error('Error adding user', err)
    });}
    else{
      this.resetForm();
      Swal.fire('Duplicate ID', 'Employee ID already exists!', 'error');
    }
  }

deleteUser(user: User) {
  if (!confirm('Are you sure you want to delete this user?')) return;

  this.userService.deleteUser(user.id).subscribe({
    next: () => {
      this.userArr.update(arr => arr.filter(u => u.id !== user.id));
      Swal.fire('Deleted!', 'User has been deleted.', 'success');
    },
    error: (err) => console.error('Error deleting user', err)
  });
}

  resetForm() {
    this.formUser.set({
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      phoneNumber: '',
      city: '',
      state: '',
      id: '1'
    });
  }

}
