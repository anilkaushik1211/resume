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
}
