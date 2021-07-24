import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-difference',
  templateUrl: './date-difference.component.html',
  styleUrls: ['./date-difference.component.scss']
})
export class DateDifferenceComponent implements OnInit {

  @Input() startDate: any;
  @Input() endDate: any;

  years: number = 0;
  months: number = 0;
  days: number = 0;

  constructor() { }

  ngOnInit() {
    this.years = this.getDifferenceBtwnYears(this.startDate, this.endDate);
    this.months = this.getDifferenceBtwnMonths(this.startDate, this.endDate);
    this.days = this.getDifferenceBtwnDays(this.startDate, this.endDate);
  }

  getDifferenceBtwnYears(startDate: any, endDate: any): number {
    const differenceBtwnTime = this.getDifferenceBtwnTime(startDate, endDate);
    return Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 365.25));
  }

  getDifferenceBtwnMonths(startDate: any, endDate: any): number {
    const differenceBtwnTime = this.getDifferenceBtwnTime(startDate, endDate);
    const months = Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 30.44));
    const years = Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 365.25));

    return months - (12 * years);
  }

  getDifferenceBtwnDays(startDate: any, endDate: any): number {
    const differenceBtwnTime = this.getDifferenceBtwnTime(startDate, endDate);
    const days = Math.floor(differenceBtwnTime / (1000 * 3600 * 24));
    const months = Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 30.44));

    return Math.floor(days - (months * 30.44));
  }


  private getDifferenceBtwnTime(startDate: any, endDate: any): number {
    if (!endDate) {
      endDate = new Date();
    }

    startDate = new Date(startDate);
    startDate.setDate(startDate.getDate() - 1);
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);

    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const differenceBtwnTime = endTime - startTime;

    return differenceBtwnTime;
  }

}
