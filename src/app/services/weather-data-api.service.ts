import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoList } from '../model/weather-data.model';

@Injectable({ providedIn: 'root' })
export class WeatherDataApiService {
  constructor(private http: HttpClient) {}

  public getWeatherDataByTown(q: string): Observable<InfoList> {
    const appid: string = '439d4b804bc8187953eb36d2a8c26a02';
    const units: string = 'metric';

    return this.http.get<InfoList>(
      'https://openweathermap.org/data/2.5/find',
      {
        params: { q, appid, units },
      }
    );
  }
}
