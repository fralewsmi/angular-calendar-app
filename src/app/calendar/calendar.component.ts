import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../service/calendar.service';
import {Year} from '../model/year';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  year: Year;
  currentYear: number;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.year = this.calendarService.getYear(this.currentYear);
  }

  changeYear(increment: number) {
    this.year = this.calendarService.getYear(this.year.value + increment);
  }
}
