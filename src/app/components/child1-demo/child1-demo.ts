import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [CommonModule],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'userName', 'user'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Demo {
  a: any;
  userName: any;
  user: any;

  constructor(private cdr: ChangeDetectorRef) {
    console.log('child-1 constructor')
  }
  ngOnChanges(myChanges: any) {
    console.log('child-1 ngOnChanges', myChanges)
  }
  ngOnInit() {
    console.log('child-1 ngOnInit');
  }
  ngDoCheck() { // when parent's object data changes, onchanges is not called
    // but docheck is called
    console.log('child-1 ngDoCheck');
    this.cdr.markForCheck();
  }
}