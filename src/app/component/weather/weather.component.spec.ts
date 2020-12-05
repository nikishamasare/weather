import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/service/weather.service';
import { MomentPipe } from 'src/app/shared/pipe/moment.pipe';
import { MockData } from './mock.data';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  const pipe = new MomentPipe();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent, MomentPipe ],
      providers: [ { provide: WeatherService, useValue: MockData } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getWeatherReport', () => {
    component.getWeatherReport();
  });

  it('should getForecast', () => {
    const city = 'London';
    component.getForecast(city);
  });

  it('pipe => it should transform unix.utc date format to Date', () => {
    expect(pipe.transform('1607154589')).toBe('1:19 PM');
    // Dec 5, 2020, 9:00:00 PM
  });
});
