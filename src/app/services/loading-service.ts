import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false); // loadingSubject-readable,writeable
  loading$ = this.loadingSubject.asObservable(); // observable - readable

  show() {
    this.loadingSubject.next(true);
  }
  hide() {
    this.loadingSubject.next(false);
  }
}
