import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlotlyViaWindowModule } from 'angular-plotly.js';
import { ScatteredComponent } from './scattered/scattered.component';
import { AppRoutingModule } from './app-routing.module';
import { BubbleComponent } from './bubble/bubble.component';
import { LineComponent } from './line/line.component';
import { AreaComponent } from './area/area.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { HostogramComponent } from './hostogram/hostogram.component';




@NgModule({
  declarations: [
    AppComponent,
    ScatteredComponent,
    BubbleComponent,
    LineComponent,
    AreaComponent,
    BarComponent,
    PieComponent,
    HostogramComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PlotlyViaWindowModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
