import { Injectable} from '@angular/core';
import { Observable, throwError , BehaviorSubject, TimeoutError, of } from 'rxjs';
import {catchError, timeout} from 'rxjs/operators'; 
import {localThought, remoteThought } from './thoughts/variables';
import {NewThought, Thought} from './thoughts/thought'
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Oops } from './error';



@Injectable({
  providedIn: 'root'
})

export class ThoughtService {

  private behaviourThought: BehaviorSubject<any> = new BehaviorSubject([])
  allThought = this.behaviourThought.asObservable();

  addThought(thought: Thought) {
    let thoughts = this.behaviourThought.getValue()
    if (Array.isArray(thoughts)) {
      this.behaviourThought.next([thought, ...thoughts]);
    }
  }

  private getThoughtsUrl = localThought+"/t/get"

  constructor(private http: HttpClient) {
    this.http.get<Thought[]>(this.getThoughtsUrl).subscribe(msg => this.behaviourThought.next(msg))
  }

  handleError(error: HttpErrorResponse) {

    if (error instanceof TimeoutError) {
      let oops: Oops = {
        type: "Tiempo excedido",
        details: "Ha pasado mucho tiempo para procesar la petición, inténtalo de nuevo mas tarde"
      }
      return throwError(() => oops);
    }

    if (error.status == 0){
      let oops: Oops = {
        type: "Ocurrio un error :(",
        details: "por favor inténtalo de nuevo.........."
      }
      return throwError(() => oops);
    } 

    if(error.status == 403) {
      let oops: Oops = {
        type: "Código Incorrecto",
        details: "El código pudo ya haberse usado o es erróneo, por favor revise el código"
      }
      return throwError(() => oops);
    }   

      let oops: Oops = {
        type: "Error desconocido",
        details: "uqe..."
      }
      return throwError(() => oops);
  }
  private newThoughtUrl = remoteThought+"/t/new/"
  createNewThought(thought: NewThought): Observable<Object>{
    let code = thought.id 
    let history = thought.history
    let title = thought.title
    if (code.length == 0) {
      let oops: Oops = {
        type: "código no valido",
        details: "El código debería tener almenos 1 caracter"
      }
      return throwError(() => oops);
    }
    if (title.length < 4 || title.length > 30) {
      let oops: Oops = {
        type: "título no valido",
        details: "El título debería tener almenos 4 caracteres y menos de 30 caracteres"
      }
      return throwError(() => oops);
    }
    if (history.length < 10 || history.length > 600) {
      let oops: Oops = {
        type: "texto no valido",
        details: "El texto debería tener almenos 10 caracteres y menos de 400 caracteres"
      }
      return throwError(() => oops);
    }
    return this.http.post<NewThought>(this.newThoughtUrl, thought).pipe(
      timeout(10000),
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