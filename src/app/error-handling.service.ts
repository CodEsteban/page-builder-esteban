import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Oops } from './error';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  private err: BehaviorSubject<any>= new BehaviorSubject(false)
  currentError = this.err.asObservable();
  popupError(oops: Oops) {
    console.log(oops,"heYEHEYEHEY")
    this.err.next(oops);
  }
  toggleCurrentError() {
    this.err.next(false)
  }
}
