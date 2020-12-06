import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectTownComponent } from '../select-town/select-town.component';
import { WeathersDataService } from 'src/app/services/weathers-data.service';
import { WetherData } from 'src/app/model/wetherData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public weathersDataService: WeathersDataService
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const matDialog = this.dialog.open(SelectTownComponent, {
      width: '400px',
      height: '200px',
    });

    matDialog.afterClosed().subscribe((result: WetherData) => {
      this.weathersDataService.setWeather(result);
    });
  }

  swith(isUpdate: boolean): void {
    this.weathersDataService.setIsUpdate(isUpdate);
  }
}
