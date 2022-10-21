import { Component, OnInit } from '@angular/core';
import {ThoughtService} from '../thought.service';
import {Thought} from '../thought'

@Component({
  selector: 'app-grid-thoughts',
  templateUrl: './grid-thoughts.component.html',
  styleUrls: ['./grid-thoughts.component.css']
})
export class GridThoughtsComponent{
  boxes: Thought[] = [];
  constructor(private thoughtService: ThoughtService){
    this.onInit()
  }

  onInit() {
    try {
      this.thoughtService.getThoughts().subscribe(msg => {
        this.boxes = msg
      })
    } catch(e){
      console.log(e)
    }
  } 
}
