import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-det-child',
  templateUrl: './change-det-child.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetChildComponent implements OnInit {

  timeSetInClass: Date = new Date();
  
  @Input()
  timeSetThroughInput: string = '';

  constructor(private changeDetRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("child: ", this);
  }

  actualTime() {
    this.timeSetInClass = new Date();
    this.changeDetRef.markForCheck();
  }

}
