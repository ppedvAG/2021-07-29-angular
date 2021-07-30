import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ITodo  from '../itodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent implements OnInit {

  todos!: ITodo[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/')
    .subscribe(response => {
      this.todos = response as ITodo[];
      console.log('this.todos: ', this.todos)
    });
  }


}