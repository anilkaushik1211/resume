import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { WORK_EXPERIENCES } from './work-experience.constant';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  WORK_EXPERIENCES = WORK_EXPERIENCES;

  currentDate: string;

  constructor() { }

  ngOnInit() {
    this.currentDate = moment(new Date()).format('MM/DD/yyyy');
  }
}
