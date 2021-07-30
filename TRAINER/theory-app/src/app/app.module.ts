import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemosMdlModule } from './demos-mdl/demos-mdl.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { TodosMdlModule } from './todos-mdl/todos-mdl.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [    
    AppComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DemosMdlModule,
    TodosMdlModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [MainNavigationComponent]
})
export class AppModule { }
