import { Component, OnInit, Input } from '@angular/core';
import { SelectedBoxService } from '../selected-box.service';
import {Thought} from '../thought';

@Component({
  selector: 'app-box-thought',
  templateUrl: './box-thought.component.html',
  styleUrls: ['./box-thought.component.css']
})
export class BoxThoughtComponent implements OnInit {
  constructor(private selectedBox: SelectedBoxService) {
   }
  @Input() thought: Thought|null = null;
  @Input() dummy = false;
  touched = false
  toggleTouch(): void {
    if (!this.dummy) {
      this.touched = !this.touched
      this.selectedBox.updateThought(this.thought)
    }
  }
  colors = [
    "#FF9AA2",
    "#FFB7B2",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#C7CEEA",
  ]
  bgColor = "#ffffff" 
  ngOnInit(): void {
    this.bgColor = this.colors[Math.floor(Math.random() * 6)]
    this.selectedBox.currentThought.subscribe(msg => {
      if(this.touched && msg != this.thought) { 
        this.touched = false
      }
    });
  }

}
