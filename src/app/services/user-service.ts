import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  httpClient = inject(HttpClient);
  userUrl = 'http://localhost:3000/users';

  getAllUsersHTTP(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl);
  }

  addUserHTTP(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userUrl, user);
  }

  updateUserHTTP(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.userUrl}/${user.id}`, user);
  }

  deleteUserHTTP(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.userUrl}/${id}`);
  }

  userArr: WritableSignal<User[]> = signal([]);
  editUserId: WritableSignal<string | null> = signal(null);
  loading = signal(true);

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

  fetchUsersFromHTTP() {
    this.loading.set(true);
    setTimeout(() => {
      this.getAllUsersHTTP().subscribe({
        next: (response: User[]) => {
          this.userArr.set(response);
          this.loading.set(false);
        },
        error: (err) => {
          console.log(err);
          this.loading.set(false);
        }
      });
    }, 3000);
  }

  addUser() {
    const user = this.formUser();
    if (!this.userArr().find(existingUser => user.id == existingUser.id)) {
      this.addUserHTTP(user).subscribe({
        next: (newUser) => {
          this.userArr.update(arr => [...arr, newUser]);
          this.resetForm();
        },
        error: (err) => console.error('Error adding user', err)
      });
    }
    else {
      this.resetForm();
      Swal.fire('Duplicate ID', 'Employee ID already exists!', 'error');
    }
  }

  deleteUser(user: User) {
    if (!confirm('Are you sure you want to delete this user?')) return;

    this.deleteUserHTTP(user.id).subscribe({
      next: () => {
        this.userArr.update(arr => arr.filter(u => u.id !== user.id));
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      },
      error: (err) => console.error('Error deleting user', err)
    });
  }

  editUser(user: User) {
    this.editUserId.set(user.id);
    this.formUser.set({ ...user });
  }

  updateUser() {
    const user = this.formUser();
    this.updateUserHTTP(user).subscribe({
      next: (updatedUser) => {
        this.userArr.update(arr => arr.map(u => u.id === updatedUser.id ? updatedUser : u));
        this.resetForm();
        this.editUserId.set(null);
        Swal.fire('Updated!', 'User has been updated.', 'success');
      },
      error: (err) => console.error('Error adding user', err)
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
    this.editUserId.set(null);
  }

}
