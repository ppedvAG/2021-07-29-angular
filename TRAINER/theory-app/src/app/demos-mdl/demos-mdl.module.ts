import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { OverviewDemosComponent } from './overview-demos/overview-demos.component';
import { CardComponent } from './card/card.component';
import { ClassVarsComponent } from './class-vars/class-vars.component';
import { TemplateVarsComponent } from './template-vars/template-vars.component';
import { InputVarsComponent } from './input-vars/input-vars.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DiashowComponent } from './diashow/diashow.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    TimeComponent,
    OverviewDemosComponent,
    CardComponent,
    ClassVarsComponent,
    TemplateVarsComponent,
    InputVarsComponent,
    LifecycleComponent,
    DiashowComponent,
    EventsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverviewDemosComponent]
})
export class DemosMdlModule { }
