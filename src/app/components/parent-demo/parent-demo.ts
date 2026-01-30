import { Component } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-demo',
  imports: [
    CommonModule,
    FormsModule,
    Child1Demo,
    Child2Demo
  ],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  user = { name: 'sanjay', role: 'trainer', address: 'bangalore' };

  a: number;
  addressParent: string = '';
  receiveDataFromChild(addressFromChild: any) {
    this.addressParent = addressFromChild;
  }
  constructor() {
    this.a = 100;
    console.log("Parent constructor")
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}