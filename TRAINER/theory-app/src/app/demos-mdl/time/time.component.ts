import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit, OnDestroy {

  date: Date = new Date();
  timeString: string = '';
  intervalID: any = 0;

  constructor() { }

  ngOnInit(): void {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.date = new Date();
    this.timeString = this.date.toLocaleTimeString();
    console.log('tick');
  }

  stop() {
    clearInterval(this.intervalID)
  }

  ngOnDestroy() {
    this.stop();
  }

}
