import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherDataApiService } from 'src/app/services/weather-data-api.service';
import { InfoList } from 'src/app/model/weather-data.model';

@Component({
  selector: 'app-select-town',
  templateUrl: './select-town.component.html',
  styleUrls: ['./select-town.component.scss'],
})
export class SelectTownComponent implements OnInit {
  townName: string;
  isFind = false;

  constructor(
    public dialogRef: MatDialogRef<SelectTownComponent>,
    private weatherDataApiService: WeatherDataApiService
  ) {}

  ngOnInit(): void {}

  selectTown(): void {
    this.weatherDataApiService
      .getWeatherDataByTown(this.townName)
      .subscribe((res: InfoList) => {
        if (!!res.list && !!res.list.length) {
          this.dialogRef.close(res.list[0]);
        } else {
          this.isFind = true;
        }
      });
  }
}
