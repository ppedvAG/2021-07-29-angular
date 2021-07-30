import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styles: [`
    .bingo {
    color: red;
    background-color: blueviolet;
}`
  ]
})
export class DiceComponent {

  zufallszahl!: number; 

  wuerfeln() {
    this.zufallszahl = Math.ceil(Math.random()*6);
  }

  getFontSize() {
    return this.zufallszahl * 10;
  }
}
