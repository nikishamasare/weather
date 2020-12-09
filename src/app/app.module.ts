import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './shared/pipe/moment.pipe';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule, ChartsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
