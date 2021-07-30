import { Component, Input, OnInit } from '@angular/core';
import ITodo from '../itodo';

@Component({
  selector: '[app-todo-dir]',
  templateUrl: './todo-dir.component.html',
  styles: [
  ]
})
export class TodoDirComponent implements OnInit {
  
  @Input()
  todo!: ITodo

  constructor() { }

  ngOnInit(): void {
  }

}
