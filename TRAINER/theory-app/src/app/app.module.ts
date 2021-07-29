import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosMdlModule } from './demos-mdl/demos-mdl.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { TodosMdlModule } from './todos-mdl/todos-mdl.module';

@NgModule({
  declarations: [    
    AppComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosMdlModule,
    TodosMdlModule
  ],
  providers: [],
  bootstrap: [MainNavigationComponent]
})
export class AppModule { }
