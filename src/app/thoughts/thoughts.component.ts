import { Component} from '@angular/core';
import { SelectedBoxService } from '../selected-box.service';
import { ThoughtService } from '../thought.service';
import {Thought} from '../thought';
import { Oops } from '../error';
import { ErrorHandlingService } from '../error-handling.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent  {
  isCreating = false
  thought: Thought | null = null;
  isThought: boolean = false;
  constructor(private selectedBox: SelectedBoxService, 
    private thoughtService: ThoughtService, 
    private errorService: ErrorHandlingService) { 
    this.thoughtService.isCreating.subscribe(msg => {

      this.isCreating = msg
      console.log("indeed - "+ msg) 
      
    })  
    this.selectedBox.currentThought.subscribe(msg => {
      if(msg != null) {
        this.isThought = true;
        this.thought = msg;
      } else {
        this.isThought = false
      } 
    })   
  }

}
