import { Component, OnChanges, OnInit } from '@angular/core';
import ITodo from '../itodo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: [
  ]
})
export class AddTodoComponent implements OnInit, OnChanges {
  newTodo: ITodo = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };
  title: string = '';

  constructor(private todosService: TodosService) { }

  ngOnChanges() {
    console.log('this.title :>> ', this.title);
  }

  ngOnInit(): void {
  }

  addTodo() {
    this.todosService.addTodoInService(this.title);
  }

}
