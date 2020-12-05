import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './shared/pipe/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule, NgbAccordionModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
