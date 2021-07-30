import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  startMessage: string = '';
  tickMessage: string = '';
  endMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleStart() {
    this.startMessage = 'Timer gestartet';
  }
  handleTick(seconds: number) {
    this.tickMessage = `Geblieben: ${seconds}`;
  }

  handleEnd(msg: string) {
    this.endMessage = msg;
  }

}
