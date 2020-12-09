import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export class MockData  {
  private baseurl = environment.baseUrl;
  private appid = environment.APP_ID;
  private europianCitiesId = [2643743, 3117735, 2950159, 745042, 2988507];
  static getWeatherReport(): Observable<any> {
    return of(
      {
        'cnt': 5,
        'list': [
           {
              'coord': {
                 'lon': -0.13,
                 'lat': 51.51
              },
              'sys': {
                 'country': 'GB',
                 'timezone': 0,
                 'sunrise': 1607154589,
                 'sunset': 1607183586
              },
              'weather': [
                 {
                    'id': 803,
                    'main': 'Clouds',
                    'description': 'broken clouds',
                    'icon': '04n'
                 }
              ],
              'main': {
                 'temp': 4.87,
                 'feels_like': 0.49,
                 'temp_min': 4.44,
                 'temp_max': 6,
                 'pressure': 996,
                 'humidity': 75
              },
              'visibility': 10000,
              'wind': {
                 'speed': 3.6,
                 'deg': 70
              },
              'clouds': {
                 'all': 79
              },
              'dt': 1607191809,
              'id': 2643743,
              'name': 'London'
           },
           {
              'coord': {
                 'lon': -3.7,
                 'lat': 40.42
              },
              'sys': {
                 'country': 'ES',
                 'timezone': 3600,
                 'sunrise': 1607152982,
                 'sunset': 1607186907
              },
              'weather': [
                 {
                    'id': 802,
                    'main': 'Clouds',
                    'description': 'scattered clouds',
                    'icon': '03n'
                 }
              ],
              'main': {
                 'temp': 6.44,
                 'feels_like': -1.04,
                 'temp_min': 5.56,
                 'temp_max': 7,
                 'pressure': 1005,
                 'humidity': 60
              },
              'visibility': 10000,
              'wind': {
                 'speed': 7.7,
                 'deg': 270
              },
              'clouds': {
                 'all': 40
              },
              'dt': 1607191784,
              'id': 3117735,
              'name': 'Madrid'
           },
           {
              'coord': {
                 'lon': 13.41,
                 'lat': 52.52
              },
              'sys': {
                 'country': 'DE',
                 'timezone': 3600,
                 'sunrise': 1607151633,
                 'sunset': 1607180041
              },
              'weather': [
                 {
                    'id': 800,
                    'main': 'Clear',
                    'description': 'clear sky',
                    'icon': '01n'
                 }
              ],
              'main': {
                 'temp': 4.5,
                 'feels_like': 1.84,
                 'temp_min': 3,
                 'temp_max': 5.56,
                 'pressure': 1005,
                 'humidity': 86
              },
              'visibility': 10000,
              'wind': {
                 'speed': 1.5,
                 'deg': 80
              },
              'clouds': {
                 'all': 0
              },
              'dt': 1607191770,
              'id': 2950159,
              'name': 'Berlin'
           },
           {
              'coord': {
                 'lon': 28.98,
                 'lat': 41.04
              },
              'sys': {
                 'country': 'TR',
                 'timezone': 10800,
                 'sunrise': 1607145244,
                 'sunset': 1607178954
              },
              'weather': [
                 {
                    'id': 802,
                    'main': 'Clouds',
                    'description': 'scattered clouds',
                    'icon': '03n'
                 }
              ],
              'main': {
                 'temp': 13.05,
                 'feels_like': 9.59,
                 'temp_min': 12,
                 'temp_max': 14,
                 'pressure': 1020,
                 'humidity': 76
              },
              'visibility': 8000,
              'wind': {
                 'speed': 4.6,
                 'deg': 50
              },
              'clouds': {
                 'all': 40
              },
              'dt': 1607191758,
              'id': 745042,
              'name': 'Istanbul'
           },
           {
              'coord': {
                 'lon': 2.35,
                 'lat': 48.85
              },
              'sys': {
                 'country': 'FR',
                 'timezone': 3600,
                 'sunrise': 1607153286,
                 'sunset': 1607183699
              },
              'weather': [
                 {
                    'id': 500,
                    'main': 'Rain',
                    'description': 'light rain',
                    'icon': '10n'
                 }
              ],
              'main': {
                 'temp': 5.49,
                 'feels_like': 0.48,
                 'temp_min': 5,
                 'temp_max': 6.11,
                 'pressure': 994,
                 'humidity': 86
              },
              'visibility': 10000,
              'wind': {
                 'speed': 5.1,
                 'deg': 150
              },
              'clouds': {
                 'all': 97
              },
              'dt': 1607191730,
              'id': 2988507,
              'name': 'Paris'
           }
        ]
     }
    );
  }

  static getForecast(): Observable<any> {
    return of(
      {
        'cod':'200',
        'message':0,
        'cnt':5,
        'list':[
           {
              'dt':1607202000,
              'main':{
                 'temp':40.86,
                 'feels_like':33.84,
                 'temp_min':40.86,
                 'temp_max':41.4,
                 'pressure':997,
                 'sea_level':997,
                 'grnd_level':995,
                 'humidity':74,
                 'temp_kf':-0.3
              },
              'weather':[
                 {
                    'id':803,
                    'main':'Clouds',
                    'description':'broken clouds',
                    'icon':'04n'
                 }
              ],
              'clouds':{
                 'all':81
              },
              'wind':{
                 'speed':6.44,
                 'deg':47
              },
              'visibility':10000,
              'pop':0.23,
              'sys':{
                 'pod':'n'
              },
              'dt_txt':'2020-12-05 21:00:00'
           },
           {
              'dt':1607212800,
              'main':{
                 'temp':41.11,
                 'feels_like':34.3,
                 'temp_min':41.11,
                 'temp_max':41.32,
                 'pressure':999,
                 'sea_level':999,
                 'grnd_level':996,
                 'humidity':80,
                 'temp_kf':-0.12
              },
              'weather':[
                 {
                    'id':804,
                    'main':'Clouds',
                    'description':'overcast clouds',
                    'icon':'04n'
                 }
              ],
              'clouds':{
                 'all':89
              },
              'wind':{
                 'speed':6.69,
                 'deg':48
              },
              'visibility':10000,
              'pop':0.23,
              'sys':{
                 'pod':'n'
              },
              'dt_txt':'2020-12-06 00:00:00'
           },
           {
              'dt':1607223600,
              'main':{
                 'temp':40.71,
                 'feels_like':32.29,
                 'temp_min':40.71,
                 'temp_max':40.73,
                 'pressure':999,
                 'sea_level':999,
                 'grnd_level':996,
                 'humidity':78,
                 'temp_kf':-0.01
              },
              'weather':[
                 {
                    'id':500,
                    'main':'Rain',
                    'description':'light rain',
                    'icon':'10n'
                 }
              ],
              'clouds':{
                 'all':99
              },
              'wind':{
                 'speed':9.26,
                 'deg':21
              },
              'visibility':10000,
              'pop':0.38,
              'rain':{
                 '3h':0.18
              },
              'sys':{
                 'pod':'n'
              },
              'dt_txt':'2020-12-06 03:00:00'
           },
           {
              'dt':1607234400,
              'main':{
                 'temp':39.99,
                 'feels_like':31.86,
                 'temp_min':39.99,
                 'temp_max':39.99,
                 'pressure':1000,
                 'sea_level':1000,
                 'grnd_level':997,
                 'humidity':77,
                 'temp_kf':0
              },
              'weather':[
                 {
                    'id':500,
                    'main':'Rain',
                    'description':'light rain',
                    'icon':'10n'
                 }
              ],
              'clouds':{
                 'all':95
              },
              'wind':{
                 'speed':8.46,
                 'deg':25
              },
              'visibility':10000,
              'pop':0.33,
              'rain':{
                 '3h':0.21
              },
              'sys':{
                 'pod':'n'
              },
              'dt_txt':'2020-12-06 06:00:00'
           },
           {
              'dt':1607245200,
              'main':{
                 'temp':40.1,
                 'feels_like':32.32,
                 'temp_min':40.1,
                 'temp_max':40.1,
                 'pressure':1001,
                 'sea_level':1001,
                 'grnd_level':998,
                 'humidity':76,
                 'temp_kf':0
              },
              'weather':[
                 {
                    'id':500,
                    'main':'Rain',
                    'description':'light rain',
                    'icon':'10d'
                 }
              ],
              'clouds':{
                 'all':97
              },
              'wind':{
                 'speed':7.76,
                 'deg':26
              },
              'visibility':10000,
              'pop':0.38,
              'rain':{
                 '3h':0.51
              },
              'sys':{
                 'pod':'d'
              },
              'dt_txt':'2020-12-06 09:00:00'
           }
        ],
        'city':{
           'id':2643743,
           'name':'London',
           'coord':{
              'lat':51.5085,
              'lon':-0.1257
           },
           'country':'GB',
           'population':1000000,
           'timezone':0,
           'sunrise':1607154588,
           'sunset':1607183586
        }
     }
    );
  }
}
