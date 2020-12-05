import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData = [];
  public forecastData = [];
  public showForecastList: boolean[] = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
   this.getWeatherReport();
  }

  getForecast(cityName: string, i?: any): void  {
    this.weatherService.getForecast(cityName).subscribe((data) => {
      this.forecastData = data.list;
      this.showForecastList[i] = !this.showForecastList[i];
    });
  }

  getWeatherReport(): void {
    this.weatherService.getWeatherReport().subscribe((data) => {
      this.weatherData = data.list;
    });
  }

}
