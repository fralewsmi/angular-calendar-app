import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {DayComponent} from './day/day.component';
import {MonthComponent} from './month/month.component';
import {CalendarService} from './service/calendar.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    MonthComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
