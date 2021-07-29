import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { OverviewDemosComponent } from './overview-demos/overview-demos.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    TimeComponent,
    OverviewDemosComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverviewDemosComponent]
})
export class DemosMdlModule { }
