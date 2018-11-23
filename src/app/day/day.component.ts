import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Day} from '../model/day';
import {Category} from '../model/category';
import {isNullOrUndefined} from 'util';
import {faBan, faBirthdayCake, faGift, faPlane, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges {
  @Input()
  day: Day;

  faIcon: IconDefinition;
  dayClass: string;

  constructor() {
  }

  ngOnInit() {
    this.setCurrentDayClass();
    this.setCategoryClass();
  }

  ngOnChanges() {
    this.setCurrentDayClass();
    this.setCategoryClass();
  }

  changeCategory(): void {
    if (isNullOrUndefined(this.day.category)) {
      this.day.category = Category.HOLIDAY;
    } else {
      switch (this.day.category) {
        case Category.HOLIDAY:
          this.day.category = Category.BIRTHDAY;
          break;
        case Category.BIRTHDAY:
          this.day.category = Category.BUSY;
          break;
        case Category.BUSY:
          this.day.category = Category.ANNIVERSARY;
          break;
        case Category.ANNIVERSARY:
          this.day.category = null;
          break;
        default:
          this.day.category = null;
      }
    }
    this.setCategoryClass();
  }

  private setCurrentDayClass() {
    if (this.day.isCurrentDay) {
      this.dayClass = 'badge badge-primary';
    } else {
      this.dayClass = 'badge';
    }
  }

  private setCategoryClass() {
    if (isNullOrUndefined(this.day.category)) {
      this.faIcon = null;
      this.setCurrentDayClass();
    } else {
      switch (this.day.category) {
        case Category.HOLIDAY:
          this.dayClass = 'badge holiday';
          this.faIcon = faPlane;
          break;
        case Category.BIRTHDAY:
          this.dayClass = 'badge birthday';
          this.faIcon = faBirthdayCake;
          break;
        case Category.BUSY:
          this.dayClass = 'badge busy';
          this.faIcon = faBan;
          break;
        case Category.ANNIVERSARY:
          this.dayClass = 'badge anniversary';
          this.faIcon = faGift;
          break;
        default:
          this.faIcon = null;
          this.dayClass = 'badge';
      }
    }
  }
}
