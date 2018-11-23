import {Injectable} from '@angular/core';
import {Day} from '../model/day';
import {Month} from '../model/month';
import {Year} from '../model/year';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private years: Map<number, Year> = new Map<number, Year>();

  constructor() {
  }

  getYear(year: number): Year {
    if (!this.years.has(year)) {
      const months: Month[] = [];
      for (let month = 0; month < 12; month++) {
        months.push(this.getMonth(year, month));
      }
      this.years.set(year, {
        value: year,
        months: months
      });
    }
    return this.years.get(year);
  }

  private getMonth(year: number, month: number) {
    const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(year, month, 1);
    const days: Day[] = [];
    while (date.getMonth() === month) {
      days.push(this.getDay(date));
      date.setDate(date.getDate() + 1);
    }
    return {
      value: month + 1,
      name: names[month],
      days: days
    };
  }

  private getDay(date) {
    const names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return {
      value: date.getDate(),
      name: names[date.getDay()],
      isCurrentDay: this.isCurrentDate(date)
    };
  }

  private isCurrentDate(date: Date) {
    const currentDate = new Date();
    date.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    return date.valueOf() === currentDate.valueOf()
  }
}
