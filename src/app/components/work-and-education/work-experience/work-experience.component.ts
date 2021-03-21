import { Component, OnInit } from '@angular/core';
import { WORK_EXPERIENCES } from './work-experience.constant';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  WORK_EXPERIENCES = WORK_EXPERIENCES;
  constructor() { }

  ngOnInit() {
  }

  getExperienceYears(startDate: any, endDate: any): number {
    const differenceBtwnTime = this.getDifferenceBtwnTime(startDate, endDate);
    return Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 365.25));
  }

  getExperienceMonths(startDate: any, endDate: any): number {
    const differenceBtwnTime = this.getDifferenceBtwnTime(startDate, endDate);
    const months = Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 30.44));
    const years = Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 365.25));

    return months - (12 * years);
  }

  getExperienceDays(startDate: any, endDate: any): number {
    const differenceBtwnTime = this.getDifferenceBtwnTime(startDate, endDate);
    const days = Math.floor(differenceBtwnTime / (1000 * 3600 * 24));
    const months = Math.floor(differenceBtwnTime / (1000 * 3600 * 24 * 30.44));

    return days - (months * 30.44);
  }


  private getDifferenceBtwnTime(startDate: any, endDate: any): number {
    if (!endDate) {
      endDate = new Date();
    }

    startDate = new Date(startDate);
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);

    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const differenceBtwnTime = endTime - startTime;

    return differenceBtwnTime;
  }


}
