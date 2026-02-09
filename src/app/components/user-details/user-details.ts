import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  user: any = signal({});
  activatedRoute = inject(ActivatedRoute);
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${params['id']}`).subscribe(response => {
        this.user.set(response)
      })
    })
  }
}
