import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeathersDataService } from './services/weathers-data.service';
import { forkJoin, Subject, timer } from 'rxjs';
import { map, takeUntil, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();

  constructor(public weathersDataService: WeathersDataService) {}

  ngOnInit(): void {
    timer(0, 60000)
      .pipe(
        filter(() => this.weathersDataService.getIsUpdate),
        switchMap(() =>
          forkJoin(this.weathersDataService.getWeathersDataReqArray)
        ),
        map((res) => res.map((weth) => weth.list[0])),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.weathersDataService.setWeathers(res);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
