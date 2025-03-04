import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logInfo (string: string) {
    console.log(string)
  }

  logWarning (string: string) {
    console.warn(string)
  }

  logError (string: string) {
    console.error(string)
  }

  constructor() { }
}
