import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MygraphComponent } from './mygraph/mygraph.component';

@NgModule({
  declarations: [
    AppComponent,
    MygraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGraphModule,
    NgxChartsModule // I don't think I need this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
