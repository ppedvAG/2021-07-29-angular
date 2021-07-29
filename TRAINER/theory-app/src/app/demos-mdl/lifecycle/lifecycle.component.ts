import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styles: [
  ]
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {

   prop1: string;

  @Input()
  inputProp!: string;

  ngOnChanges() {
    console.log('ngOnChange is logging');
  }
  
  constructor() { 
    console.log('constructor is logging'); // wird in dem Zustand angezeigt
    this.prop1 = 'wert aus Konstruktor';
  }

  ngOnInit(): void {
    console.log('ngOnInit is logging'); // wird in dem Zustand angezeigt
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is logging'); // wird beim Routing z.B. ausgeführt
  }

  // todo #1 

}
