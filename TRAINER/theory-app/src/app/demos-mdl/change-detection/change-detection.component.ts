import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styles: [
  ]
})
export class ChangeDetectionComponent implements OnInit, OnDestroy {

  intervalId!: any;
  // someValue!: string;
  constructor() { }

  ngOnInit(): void {
this.intervalId! = setInterval(() => {
  this.showYourself();
},1000)
  }

  showYourself() {
    console.log('this :>> ', this);
    return 'value from parent';
  }

  stop() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    this.stop();
  }



}
