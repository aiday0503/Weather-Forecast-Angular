
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";


@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string) {

    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7167cbc1269be9994474005db8788fe9`);
  
    
   
  }

}