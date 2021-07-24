import { Component, OnInit } from '@angular/core';
import { EDUCATIONS } from './education.constant';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  EDUCATIONS = EDUCATIONS;
  constructor() { }

  ngOnInit() {
  }

}
