import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
      let obs = this._weatherService.getWeather('sanjose')
      obs.subscribe( weather => {
        console.log(weather)
        this.humidity = weather['main'].humidity;
        this.temp = weather['main'].temp;
        this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
        this.maxTemp = weather['main'].temp_max;
        this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
        this.minTemp = weather['main'].temp_min;
        this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
        this.clouds = weather['weather'][0].description;
   
      });

    }
  }
