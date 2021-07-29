import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isHome: boolean = false;
  counter: number = 0;
  size: number = 14;

  constructor() { }

  ngOnInit(): void {
  }

  home() {
    this.isHome = true;
  }
  away() {
    this.isHome = false;
  }

  handleClick() {
    this.counter++;
  }

  produceAlert() {
    alert('button clicked');
  }

  changeSize(sizeNumber: number) {
    this.size = sizeNumber;
  }

  eventTarget: any = 'show target';

  showEventObject(ev: any) {
    this.eventTarget = ev.target;
  }

}
