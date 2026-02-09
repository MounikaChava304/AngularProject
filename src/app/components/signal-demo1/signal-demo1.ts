import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal, Signal, WritableSignal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.html',
  styleUrl: './signal-demo1.css',
})
export class SignalDemo1 {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  squareCount: Signal<number> = computed(() => this.count() * this.count());
  increment() {
    this.count.update(val => val + 1)
  }
  decrement() {
    this.count.update(val => val - 1)
  }
  reset() {
    this.count.set(0);
  }
  // ==============

  cookieCount: WritableSignal<number> = signal(10);
  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);
  updateCookieCount(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
  // ================
  httpClient = inject(HttpClient);
  userId = signal(1);
  userData: WritableSignal<any> = signal({})
  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData.set(response)
    })
  }
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }
}
