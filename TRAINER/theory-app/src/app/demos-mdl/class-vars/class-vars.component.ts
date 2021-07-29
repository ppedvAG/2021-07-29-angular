import { Component} from '@angular/core';

@Component({
  selector: 'app-class-vars',
  templateUrl: './class-vars.component.html',
  styles: [
  ]
})
export class ClassVarsComponent {
  // werte von props können im template angezeigt werden
  prop1: string = 'wert von prop1';
  prop2: string = 'wert von prop2';
  // Rückgaben von Methoden im template anzeigen
  sayHello() {
    return 'Hello';
  }
  showYourself() {
    // return this;
    console.log(this);
    return this.toString();
  }
}
