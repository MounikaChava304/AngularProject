import { Component, inject } from '@angular/core';
import { LoggingService } from '../../services/logging-service';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {
loggingService = inject(LoggingService)
  ngOnInit() {
    console.log('Demo-2 ngOnInit');
    this.loggingService.log('ERROR','Something went wrong')
  }
  ngOnDestroy() {
    console.log('Demo-2 ngOnDestroy')
  }
}
