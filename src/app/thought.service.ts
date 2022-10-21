import { Injectable } from '@angular/core';
import { Observable, throwError , BehaviorSubject } from 'rxjs';
import {catchError} from 'rxjs/operators'; 
import {NewThought, Thought} from './thought'
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Oops } from './error';
import { ErrorHandlingService } from './error-handling.service';



@Injectable({
  providedIn: 'root'
})

export class ThoughtService {



  private getThoughtsUrl = "http://thought:3001/t/get"
  getThoughts():Observable<Thought[]>{
    return this.http.get<Thought[]>(this.getThoughtsUrl).pipe()
  }

  constructor(private http: HttpClient, private errorService: ErrorHandlingService) {}

  handleError(error: HttpErrorResponse) {
    console.log("handling error", error)

    if(error.status === 400) {
      let oops: Oops = {
        type: "Incormacion incorrecta",
        details: "Que extrano."
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
        details: "por favor revise el codigo."
      }
      return throwError(() => oops);
    }   

      let oops: Oops = {
        type: "Error desconocido",
        details: "uqe..."
      }
      return throwError(() => oops);
  }
  private newThoughtUrl = "http://localhost:3001/t/new"
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
    let thoughtJson = JSON.stringify(thought)
    return this.http.post(this.newThoughtUrl, thoughtJson).pipe(catchError(this.handleError))
  }

  private creating: BehaviorSubject<boolean>= new BehaviorSubject(false)
  isCreating = this.creating.asObservable();
  private isCreatingValue = false
  toggleCreating() {
    this.creating.next(!this.isCreatingValue);
    this.isCreatingValue = !this.isCreatingValue
  }
}