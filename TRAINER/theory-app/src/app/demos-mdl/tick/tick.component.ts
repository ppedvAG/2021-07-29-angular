import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styles: [
  ]
})
export class TickComponent implements OnInit {

  @Input()
  time: number = 0;
  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() tick: EventEmitter<number> = new EventEmitter();
  @Output() end: EventEmitter<string> = new EventEmitter();

  remainingTime: number = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    console.log('handleClick');
    this.start.emit();
    this.remainingTime = this.time;
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      this.tick.emit(this.remainingTime);
      if (this.remainingTime == 0) {
        this.end.emit('Zeit ist abgelaufen');
        clearInterval(this.intervalId);
      }
    }, 1000)
  }

}
