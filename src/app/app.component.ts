import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private weatherService: WeatherService){

  }
   cityName : string  = 'New Delhi';
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName ='';
    
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName ='';

  }
  private getWeatherData(cityName:string){

    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response: any) => {
        this.weatherData = response;
        console.log(response);
      }
    });

  }
  
}
