import { Injectable } from '@angular/core';

enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  private loggingEnabled = true;

  enableLogging() {
    this.loggingEnabled = true;
  }
  disableLogging() {
    this.loggingEnabled = false;
  }
  log(level: any, message: string) {
    switch (level) {
      case LogLevel.DEBUG:
        console.debug(message); break;
      case LogLevel.INFO:
        console.info(message); break;
      case LogLevel.WARN:
        console.warn(message); break;
      case LogLevel.ERROR:
        console.error(message); break;
      default:
        console.log(message); break;
    }
  }
}
