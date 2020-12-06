import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { SelectTownComponent } from './select-town/select-town.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormatPipe } from '../pipe/temperature.pipe';

@NgModule({
  declarations: [
    WeatherCardComponent,
    HeaderComponent,
    FooterComponent,
    SelectTownComponent,
    FormatPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    WeatherCardComponent,
    HeaderComponent,
    FooterComponent,
    SelectTownComponent,
    FormatPipe,
  ],
  entryComponents: [SelectTownComponent],
})
export class SharedModule {}
