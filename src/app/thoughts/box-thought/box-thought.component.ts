import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SelectedBoxService } from '../selected-box.service';
import {Thought} from '../thought';

@Component({
  selector: 'thoughts-box-thought',
  templateUrl: './box-thought.component.html',
  styleUrls: ['./box-thought.component.css']
})
export class BoxThoughtComponent implements OnInit {
  constructor(private selectedBox: SelectedBoxService) {
  }

  


  @Input() thought: Thought | null = null;
  @Input() dummy = false;
  touched = false
  fontSize = "20px"
  toggleTouch(): void {
    if (this.dummy) {
      this.touched = !this.touched
    }
    else {
      this.touched = true 
      this.selectedBox.updateThought(this.thought)
    }
  }
  bgColors = [
    "#FF9AA2",
    "#FFB7B2",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#C7CEEA",
  ]

  fgColors = [
    "#945054",
    "#9f625f",
    "#8d664f",
    "#6d8352",
    "#53826f",
    "#495380",
  ]
  bgColor = "#ffffff" 
  fgColor = "#ffffff" 
  ngOnInit(): void {
    let randomIndex = Math.floor(Math.random() * 6)
    this.bgColor = this.bgColors[randomIndex]
    this.fgColor = this.fgColors[randomIndex]
    this.selectedBox.currentThought.subscribe(msg => {
      if(this.touched && msg != this.thought) { 
        this.touched = false
      }
    });
  }

}
