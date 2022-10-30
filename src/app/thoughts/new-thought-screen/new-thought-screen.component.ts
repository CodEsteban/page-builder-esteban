import { Component, } from '@angular/core';
import { NewThought, Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ErrorHandlingService } from '../../error-handling.service';
import { Oops } from '../../error';
import * as e from 'express';

@Component({
  selector: 'thoughts-new-thought-screen',
  templateUrl: './new-thought-screen.component.html',
  styleUrls: ['./new-thought-screen.component.css']
})
export class NewThoughtScreenComponent {
  preview: Thought = {
    preview: "Hey",
    history:"",
    title:"",
  }
  code = ""
  title = ""
  history = ""
  onOK() {
    console.log(this.preview.preview + " " + this.code + " "+ this.title + " "+ this.history)
    let newThought: NewThought = {
      preview: this.preview.preview,
      history: this.history,
      title: this.title,
      id: this.code
    }
    let thought: Thought = {
      preview: this.preview.preview,
      history: this.history,
      title: this.title,
    }
      this.thoughtService.createNewThought(newThought).subscribe(msg => {
        this.thoughtService.addThought(thought)
        this.toggleShow()
      }, err => {
          this.errorService.popupError(err as Oops)
      })
  }
  onKey(event: any) { // without type info
    this.preview.preview = event.target.value;
  }
  toggleShow() {
    this.thoughtService.toggleCreating()
  }

  constructor(private thoughtService: ThoughtService, private errorService: ErrorHandlingService) {}
}
