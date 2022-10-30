import { Component} from '@angular/core';
import { SelectedBoxService } from './selected-box.service';
import { ThoughtService } from './thought.service';
import {Thought} from './thought';
import { ErrorHandlingService } from '../error-handling.service';

@Component({
  selector: 'thoughts-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent  {
  isCreating = false
  thought: Thought | null = null;
  isThought: boolean = false;
  constructor(private selectedBox: SelectedBoxService, 
    private thoughtService: ThoughtService) { 
    this.thoughtService.isCreating.subscribe(msg => {
      this.isCreating = msg
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
