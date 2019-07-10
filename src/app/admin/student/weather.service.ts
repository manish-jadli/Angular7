import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  
  //daily forecast map code
  dailyForecast(){
    return this._http.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
    .pipe(map(result => result));;
  }
  //end
  constructor(private _http:HttpClient) { }
}
