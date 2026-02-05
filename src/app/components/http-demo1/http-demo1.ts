import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {

  user_url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { };

  ngOnInit() {
    this.fetchData_Javascript();
    this.fetchData_Angular();
  }

  fetchData_Javascript() {
    fetch(this.user_url).then( //fetch returns Promise
      (response) => {
        response.json().then(
          (finalResponse) => {
            console.log(finalResponse)
          },
          (finalError) => {
            console.log(finalError)
          }
        )
      }, (error) => {
        console.log(error)
      }
    )
  }

  fetchData_Angular() { //httpClient.get() returns observable
    this.httpClient.get(this.user_url).subscribe(
      (response) => { console.log(response) },
      (error) => { console.log(error) },
      () => { console.log('Completed.....') }
    )
  }

  fetchData_Angular_new() { //httpClient.get() returns observable
    this.httpClient.get(this.user_url).subscribe({
      next: (response) => { console.log(response) },
      error: (error) => { console.log(error) },
      complete: () => { console.log('Completed.....') }
    }
    )
  }

}
