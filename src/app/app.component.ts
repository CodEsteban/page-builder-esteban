import { Component } from '@angular/core';
import { ErrorHandlingService } from './error-handling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page-builder';
  isError = false;
  constructor(private errorService: ErrorHandlingService){
    errorService.currentError.subscribe(msg => this.isError = msg)
  }
}
