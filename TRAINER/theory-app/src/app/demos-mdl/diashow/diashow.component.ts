import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diashow',
  templateUrl: './diashow.component.html',
  styles: [
  ]
})
export class DiashowComponent implements OnInit {

  @Input()
  images: string[] = [];
  activeImg = 0;
  intervalId!: any;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.activeImg === 3 ? this.activeImg = 0 : this.activeImg++
    }, 2000)
  }

  stopDia() {
    clearInterval(this.intervalId);
  }

}
