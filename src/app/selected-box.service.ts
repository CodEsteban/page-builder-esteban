import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Thought } from './thought';

@Injectable({
  providedIn: 'root'
})
export class SelectedBoxService {
  private thought: BehaviorSubject<any>= new BehaviorSubject(null)
  currentThought = this.thought.asObservable();
  updateThought(thought: Thought | null) {
    this.thought.next(thought);
  }
}

