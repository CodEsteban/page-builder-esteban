import { Injectable, } from '@angular/core';
import { Observable, throwError , BehaviorSubject, TimeoutError, of } from 'rxjs';
import {catchError, timeout,} from 'rxjs/operators'; 
import { remoteThoughtUrl, localThoughtUrl } from './variables';
import {NewThought, Thought} from './thought'
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Oops } from '../error';
import { ErrorHandlingService } from '../error-handling.service';



@Injectable({
  providedIn: 'root'
})

export class ThoughtService {

  private allThought: Thought[]= []

  private getThoughtsUrl = localThoughtUrl+"/t/get"
  addThought(thought: Thought) {
    this.allThought.unshift(thought)
    of(this.allThought)
  }

  getThoughts():Observable<Thought[]>{
    this.http.get<Thought[]>(this.getThoughtsUrl).subscribe(msg => this.allThought = msg)
    return of(this.allThought)
  }

  constructor(private http: HttpClient, private errorService: ErrorHandlingService) {}

  handleError(error: HttpErrorResponse) {
    console.log("handling error", error)

    if (error instanceof TimeoutError) {
      let oops: Oops = {
        type: "Tiempo excedido",
        details: "Ha pasado mucho tiempo para procesar la peticion, intentalo de nuevo mas tarde"
      }
      return throwError(() => oops);
    }

    if (error.status == 0){
      let oops: Oops = {
        type: "Ocurrio un error :(",
        details: "por favor intentalo de nuevo.........."
      }
      return throwError(() => oops);
    } 

    if(error.status == 403) {
      let oops: Oops = {
        type: "Codigo Incorrecto",
        details: "El codigo pudo ya haberse usado o es erroneo, por favor revise el codigo"
      }
      return throwError(() => oops);
    }   

      let oops: Oops = {
        type: "Error desconocido",
        details: "uqe..."
      }
      return throwError(() => oops);
  }
  private newThoughtUrl = remoteThoughtUrl+"/t/new/"
  createNewThought(thought: NewThought): Observable<Object>{
    let code = thought.id 
    let history = thought.history
    let title = thought.title
    if (code.length == 0) {
      let oops: Oops = {
        type: "codigo no valido",
        details: "El codigo deberia tener almenos 1 caracter"
      }
      return throwError(() => oops);
    }
    if (title.length < 4 || title.length > 30) {
      let oops: Oops = {
        type: "titulo no valido",
        details: "El titulo deberia tener almenos 4 caracteres y menos de 30"
      }
      return throwError(() => oops);
    }
    if (history.length < 10 || history.length > 200) {
      let oops: Oops = {
        type: "text no valido",
        details: "El texto deberia tener almenos 10 caracteres y menos de 200"
      }
      return throwError(() => oops);
    }
    console.log("post sent")
//    let thoughtJson = JSON.stringify(thought)
    console.log(thought)
    return this.http.post<NewThought>(this.newThoughtUrl, thought).pipe(
      timeout(5000),
      catchError(this.handleError))
  }

  private creating: BehaviorSubject<boolean>= new BehaviorSubject(false)
  isCreating = this.creating.asObservable();
  private isCreatingValue = false
  toggleCreating() {
    this.creating.next(!this.isCreatingValue);
    this.isCreatingValue = !this.isCreatingValue
  }
}