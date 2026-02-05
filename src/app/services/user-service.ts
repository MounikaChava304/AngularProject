import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
     httpClient = inject(HttpClient);
     userUrl = 'http://localhost:3000/users';

    getAllUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.userUrl);
    }

    addUser(user: User): Observable<User>{
      return this.httpClient.post<User>(this.userUrl, user);
    }

    updateUser(user: User): Observable<User>{
      return this.httpClient.put<User>(`${this.userUrl}/${user.id}`, user);
    }

    deleteUser(id: string): Observable<void>{
      return this.httpClient.delete<void>(`${this.userUrl}/${id}`);
    }
}
