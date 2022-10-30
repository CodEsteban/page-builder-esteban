import { Component, OnInit } from '@angular/core';
import { SelectedBoxService } from '../selected-box.service';
import { Thought } from '../thought';

@Component({
  selector: 'thoughts-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {
  thought: Thought | null = null;
  constructor(private selectedBox: SelectedBoxService) { }

  ngOnInit(): void {
    this.selectedBox.currentThought.subscribe(msg => {
      this.thought = msg;
    })
  }
  quit(): void {
    this.selectedBox.updateThought(null);
  } 

}
