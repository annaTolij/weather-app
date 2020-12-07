import { Component, OnInit, Input } from '@angular/core';
import { WetherData } from 'src/app/model/weather-data.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() cardInfo: WetherData;

  condition: string;

  constructor() {}

  ngOnInit(): void {
    this.condition = `http://openweathermap.org/img/wn/${this.cardInfo.weather[0].icon}@2x.png`;
  }
}
