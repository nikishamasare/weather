import { Injectable } from '@angular/core';
import { RestService } from '../shared/service/rest.service';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseurl = environment.baseUrl;
  private appid = environment.APP_ID;
  private europianCitiesId = [2643743, 3117735, 2950159, 745042, 2988507];

  constructor(private restService: RestService) { }

  getWeatherReport(): Observable<any> {
    const citiesID = this.europianCitiesId.toString();
    const url = `${this.baseurl}/group?id=${citiesID}&units=metric&appid=${this.appid}`;
    return this.restService.get(url);
  }

  getForecast(cityname): Observable<any> {
    const url = `${this.baseurl}/forecast?q=${cityname}&units=imperial&appid=${this.appid}`;
    return this.restService.get(url);
  }
}
