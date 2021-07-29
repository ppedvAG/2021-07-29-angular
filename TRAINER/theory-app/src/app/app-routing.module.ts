import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewDemosComponent } from './demos-mdl/overview-demos/overview-demos.component';
import { OverviewTodosComponent } from './todos-mdl/overview-todos/overview-todos.component';

const routes: Routes = [
  {path: 'demos', component: OverviewDemosComponent},
  {path: 'todos', component: OverviewTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
