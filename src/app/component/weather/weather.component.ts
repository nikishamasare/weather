import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData = [];
  public forecastData = [];
  public showForecastList: boolean[] = [];
  chartOptions = {
    responsive: true
  };
  chartData = [];
  public chartLabels = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherReport();
  }

  getForecast(cityName: string, i?: any): void {
    const time = 9;
    this.weatherService.getForecast(cityName).subscribe((data) => {
      if (data.list && data.list.length > 0) {
        const farr = data.list.filter(a => {
          const dt = new Date(a.dt_txt).getHours();
          return dt === time;
        });
        this.forecastData = farr;
        this.getDays();
        this.getSeaLevelForChartData();
      }
    });
    this.showForecastList[i] = !this.showForecastList[i];
  }

  getWeatherReport(): void {
    this.weatherService.getWeatherReport().subscribe((data) => {
      this.weatherData = data.list;
    });
  }

  getSeaLevelForChartData(): void {
    const sealevel = this.forecastData.map( s => {
      return s.main.sea_level;
    });
    this.chartData = [{
      data: sealevel, label: 'Sea Level (hPa)'
    }] ;
  }

  getDays(): void {
    const days = this.forecastData.map( d => {
      return moment(d.dt_txt).format('DD/MM/YYYY');
    });
    this.chartLabels = days;
  }

}
