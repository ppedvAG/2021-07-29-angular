import { Component, Input, OnInit } from '@angular/core';
import ITodo from '../itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [`:host {
    display: contents;
  }`
  ]
})
export class TodoComponent implements OnInit {
  
  @Input()
  todo!: ITodo;

  constructor() { }

  ngOnInit(): void {
  }

}
