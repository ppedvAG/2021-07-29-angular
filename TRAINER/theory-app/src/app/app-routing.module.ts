import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassVarsComponent } from './demos-mdl/class-vars/class-vars.component';
import { DiashowComponent } from './demos-mdl/diashow/diashow.component';
import { DiceComponent } from './demos-mdl/dice/dice.component';
import { EventsComponent } from './demos-mdl/events/events.component';
import { InputVarsComponent } from './demos-mdl/input-vars/input-vars.component';
import { LifecycleComponent } from './demos-mdl/lifecycle/lifecycle.component';
import { OverviewDemosComponent } from './demos-mdl/overview-demos/overview-demos.component';
import { TemplateVarsComponent } from './demos-mdl/template-vars/template-vars.component';
import { OverviewTodosComponent } from './todos-mdl/overview-todos/overview-todos.component';

const routes: Routes = [
  {
    path: 'demos', 
    component: OverviewDemosComponent,
    children: [
      {path: 'class-vars', component: ClassVarsComponent},
      {path: 'diashow', component: DiashowComponent},
      {path: 'dice', component: DiceComponent},
      {path: 'events', component: EventsComponent},
      {path: 'input-vars', component: InputVarsComponent},
      {path: 'lifecycle', component: LifecycleComponent},
      {path: 'template-vars', component: TemplateVarsComponent}      
    ]
  },
  {path: 'todos', component: OverviewTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
