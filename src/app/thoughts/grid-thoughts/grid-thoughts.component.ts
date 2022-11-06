import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ThoughtService} from '../../thought.service';
import {Thought} from '../thought'

@Component({
  selector: 'thoughts-grid-thoughts',
  templateUrl: './grid-thoughts.component.html',
  styleUrls: ['./grid-thoughts.component.css']
})
export class GridThoughtsComponent implements OnInit {
  boxes: Thought[] = [];
  constructor(private thoughtService: ThoughtService, private http: HttpClient){
    this.thoughtService.allThought.subscribe(msg => this.boxes = msg )
  }
  private getThoughtsUrl = "http://thought:3001"+"/t/get/"
  ngOnInit(){
  }
}
