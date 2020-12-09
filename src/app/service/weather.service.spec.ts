import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { MockData } from '../component/weather/mock.data';
import { Observable, of } from 'rxjs';
describe('WeatherService', () => {
  let service: WeatherService;
  let originalTimeout;
  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(WeatherService);
  });
  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getWeatherReport in service, should return value from Observable', (done: DoneFn) => {
    service.getWeatherReport().subscribe(value => {
      expect(value.list).length;
      done();
    })
  });

  it('#getWeatherForeCast in service, should return value from Observable', (done: DoneFn) => {
    const city = 'London';
    service.getForecast(city).subscribe(value => {
      expect(value.list).length;
      done();
    })
  });
});
