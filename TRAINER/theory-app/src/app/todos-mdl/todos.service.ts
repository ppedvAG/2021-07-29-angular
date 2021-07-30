import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getTodosObservable() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/')
    .pipe(
      catchError(this.errorCallback('getting todos ', []))
    )    
  }

  errorCallback<T>(operation = 'operation', result: T): any {
    return (error: any) => {
      console.log('error :>> ', error);
      console.log('error.message :>> ', error.message);
      console.log('operation :>> ', operation);
      return of(result as T);
    }
  }
    /* 
    HttpErrorResponse {headers: HttpHeaders, status: 404, statusText: "OK", url: "https://jsonplaceholder.typicode.com/todo/", ok: false, …}
      error: {}
      headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ}
      message: "Http failure response for https://jsonplaceholder.typicode.com/todo/: 404 OK"
      name: "HttpErrorResponse"
      ok: false
      status: 404
      statusText: "OK"
      url: "https://jsonplaceholder.typicode.com/todo/"
      __proto__: HttpResponseBase 
      */    
  
  
}
