import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { Story1Component } from './story1/story1.component';
import { Story2Component } from './story2/story2.component';
import { StartComponent } from './start/start.component';
import { Story3Component } from './story3/story3.component';


@NgModule({
  declarations: [
    AppComponent,
    Story1Component,
    Story2Component,
    StartComponent,
    Story3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
