import { Component, OnInit } from '@angular/core';
import ITodo  from '../itodo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent implements OnInit {

  // Ohne Initialwert wird beim ersten Rendern ein Fehler in die Konsole ausgegeben. View funktioniert aber.
  // todos!: ITodo[];
  todos: ITodo[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodosObservable()
    .subscribe(response => {
      this.todos = response as ITodo[];
      console.log('this.todos: ', this.todos)
    });
  }
}
