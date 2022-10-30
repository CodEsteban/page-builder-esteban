import { Component, Output, EventEmitter } from '@angular/core';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'thoughts-add-thought',
  templateUrl: './add-thought.component.html',
  styleUrls: ['./add-thought.component.css']
})
export class AddThoughtComponent {

  toggle() {
    this.thoughtService.toggleCreating()
  }
  constructor(private thoughtService: ThoughtService) {
    
  }
}
