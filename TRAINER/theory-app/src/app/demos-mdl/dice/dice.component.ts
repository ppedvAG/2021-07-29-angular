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
    // Option 2 mit ngClass
    diceClasses!: any;

  wuerfeln() {
    this.zufallszahl = Math.ceil(Math.random()*6);
    this.diceClasses = {
      'bingo': this.zufallszahl == 6
    }
  }

  getFontSize() {
    return this.zufallszahl * 10;
  }




}
