import { Component } from '@angular/core';
import { MathService } from './../../services/math-service';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  timerId: number;
  // mathService = inject(MathService); // Dependency Injection

  // mathService = new MathService();
  constructor(private mathService: MathService) { // Dependency Injection
    this.timerId = setInterval(() => {
      console.log("I am Interval From Demo-1")
    }, 1000)
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit');

    console.log('Sum: ', this.mathService.sum([10, 20, 30, 40, 50]));
    console.log('average: ', this.mathService.average([10, 20, 30, 40, 50]));
    console.log('indexOfMax: ', this.mathService.indexOfMax([10, 20, 30, 40, 50]));
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.timerId);
  }
}
