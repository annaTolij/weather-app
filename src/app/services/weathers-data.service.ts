import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { WeatherDataApiService } from './weather-data-api.service';
import { WetherData, InfoList } from '../model/wetherData.model';

@Injectable({ providedIn: 'root' })
export class WeathersDataService {
  private STORAGE_KEY = 'town-array';

  private weathersData: WetherData[] = [];
  private weathersDataReqArray: Observable<InfoList>[] = [];
  private townArray: string[] = [];
  private isUpdate: boolean = true;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private weatherDataApiService: WeatherDataApiService
  ) {
    this.townArray = this.storage.get(this.STORAGE_KEY) || [];

    if (!this.townArray.length) {
      this.setTownArrayToStorage('Minsk');
    }

    this.weathersDataReqArray = this.townArray.map((res) =>
      this.weatherDataApiService.getWeatherDataByTown(res)
    );
  }

  public get getIsUpdate(): boolean {
    return this.isUpdate;
  }

  public setIsUpdate(isUpdate: boolean): void {
    this.isUpdate = isUpdate;
  }

  public get getWeathers(): WetherData[] {
    return this.weathersData;
  }

  public get getWeathersDataReqArray(): Observable<InfoList>[] {
    return this.weathersDataReqArray;
  }

  public setWeathers(weathersData: WetherData[]): void {
    this.weathersData = weathersData;
  }

  public setWeather(weathersData: WetherData): void {
    if (!this.townArray.find((item) => item === weathersData.name)) {
      this.setTownArrayToStorage(weathersData.name);
      this.weathersData.unshift(weathersData);
      this.weathersDataReqArray.unshift(
        this.weatherDataApiService.getWeatherDataByTown(weathersData.name)
      );
    }
  }

  private setTownArrayToStorage(town: string): void {
    this.townArray.unshift(town);

    this.storage.set(this.STORAGE_KEY, this.townArray);
  }
}
