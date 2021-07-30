import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { OverviewDemosComponent } from './overview-demos/overview-demos.component';
import { TimerComponent } from './timer/timer.component';
import { ClassVarsComponent } from './class-vars/class-vars.component';
import { TemplateVarsComponent } from './template-vars/template-vars.component';
import { InputVarsComponent } from './input-vars/input-vars.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DiashowComponent } from './diashow/diashow.component';
import { EventsComponent } from './events/events.component';
import { DiceComponent } from './dice/dice.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { PwconfirmComponent } from './pwconfirm/pwconfirm.component';
import { TickComponent } from './tick/tick.component';



@NgModule({
  declarations: [
    TimeComponent,
    OverviewDemosComponent,
    TimerComponent,
    ClassVarsComponent,
    TemplateVarsComponent,
    InputVarsComponent,
    LifecycleComponent,
    DiashowComponent,
    EventsComponent,
    DiceComponent,
    PwconfirmComponent,
    TickComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [OverviewDemosComponent]
})
export class DemosMdlModule { }
