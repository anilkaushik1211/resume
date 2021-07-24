import { TECH_ENVIRONMENT_ICON } from './../../core/constants/tech-environment.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  TECH_ENVIRONMENT_ICON = TECH_ENVIRONMENT_ICON;

  constructor() { }

  ngOnInit() {
  }

}
