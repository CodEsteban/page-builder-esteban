import { Component } from '@angular/core';
import { Oops } from '../error';
import { ErrorHandlingService } from '../error-handling.service';
@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css']
})
export class ErrorPopupComponent {

  currentError: Oops | null = null

  constructor(private errorService: ErrorHandlingService) { 
    errorService.currentError.subscribe(msg =>{
      this.currentError = msg
    })
  }
  toggleError(){
    this.errorService.toggleCurrentError()
  }
}
