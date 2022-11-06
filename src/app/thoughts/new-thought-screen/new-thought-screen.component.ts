import { Component} from '@angular/core';
import { NewThought, Thought } from '../thought';
import { ThoughtService } from '../../thought.service';
import { map, fromEvent, debounceTime} from 'rxjs';
import { ErrorHandlingService } from '../../error-handling.service';
import { Oops } from '../../error';

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
  isKeyboard:boolean = false
  code = ""
  title = ""
  history = ""
  scaleSize = 1
  windowHeight = 1000
  onOK() {
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
  checkScreenSize() :boolean {
    let height = document.body.offsetHeight    
    return height < 590 ? true : false
  };
  constructor(private thoughtService: ThoughtService, private errorService: ErrorHandlingService) {
    const screenSizeChanged = fromEvent(window, 'resize').pipe(debounceTime(200), map(this.checkScreenSize));
    screenSizeChanged.subscribe(msg => {
      this.scaleSize = this.windowHeight / 620
      this.isKeyboard = msg
    })
  }
}
