import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2-demo',
  imports: [
    FormsModule
  ],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['aChild2'],
  outputs:['addressEvent']
})
export class Child2Demo {
  aChild2: any;
  userName = 'Virat Kohli';
  address = 'Bangalore , India';

  addressEvent = new EventEmitter();
  sendDataToParent() {
    this.addressEvent.emit(this.address);
  }
}