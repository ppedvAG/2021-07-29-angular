import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-vars',
  templateUrl: './input-vars.component.html',
  styles: [
  ]
})
export class InputVarsComponent {

  @Input()
  placeholder1!: string;

/*   @Input()
  placeholder1: string = "test"; 
  Der Wert 'test' wird durch Input überschrieben. */

  @Input('anotherName')
  placeholder2!: string;
}
