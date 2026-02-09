import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, filter, forkJoin, fromEvent, interval, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  httpClient = inject(HttpClient);
  //publisher -- who publishes the data
  num$ = interval(1000); //interval returns new number after every 1 sec
  even_num$ = this.num$.pipe(filter(val => val % 2 == 0));
  square_num$ = this.num$.pipe(map(val => val * val));

  @ViewChild('loginBtn') loginBtn!: ElementRef;

  time$ = this.num$.pipe(map(val => {
    return new Date().toLocaleTimeString();
  }))

  ngOnInit() {
    // this.num$.subscribe(val=>console.log(val));
    // this.forkjoin_demo();
    this.mergeMap_demo();
  }

  forkjoin_demo() {
    let obsArr = [this.httpClient.get('https://jsonplaceholder.typicode.com/users'),
    this.httpClient.get('https://jsonplaceholder.typicode.com/comments'),
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
    ]

    forkJoin(obsArr).subscribe(responseArr => {
      console.log(responseArr);
    },
      error => {
        console.log('Something went wrong', error);
      });

  }

  mergeMap_demo() {
    const userId$ = of(1, 2, 3, 4, 5); //outer observable -- decides how many data we have
    userId$.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`) //nested observable -- will be called based on how much data is there in the outer observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  concatMap_demo() {
    const userId$ = of(1, 2, 3, 4, 5); //outer observable -- decides how many data we have
    userId$.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`) //nested observable -- will be called in sequential order
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }


  ngAfterViewInit() {
    //If even login button is clicked multiple times, it took it as submit only after the first  request is completed
    fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
      return this.httpClient.get('https://httpbin.org/delay/5')
    })).subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
    })

    //Here if login button is clicked two times, even though the first request is not processed, the second request is shown in network
    //     fromEvent(this.loginBtn.nativeElement, 'click').pipe(mergeMap((val) => {
    //   return this.httpClient.get('https://httpbin.org/delay/5')
    // })).subscribe({
    //   next: (res) => console.log('Response:', res),
    //   error: (err) => console.error('Error:', err),
    // })
  }

}
