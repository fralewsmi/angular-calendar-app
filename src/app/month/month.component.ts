import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Month} from '../model/month';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit, OnChanges {
  @Input()
  month: Month;

  firstDayIndex: number;

  constructor() {
  }

  ngOnInit() {
    this.firstDayIndex = this.getFirstDayIndex();
  }

  ngOnChanges() {
    this.firstDayIndex = this.getFirstDayIndex();
  }

  private getFirstDayIndex() {
    const firstDay = this.month.days[0].name;
    const names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return names.indexOf(firstDay);
  }

  getSpaces(numSpaces: number) {
    return Array.from(Array(numSpaces).keys())
  }
}
