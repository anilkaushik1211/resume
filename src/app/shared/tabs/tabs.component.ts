import { Component, OnInit } from '@angular/core';
import { TABS } from './tabs.constant';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs = TABS;

  constructor() { }

  ngOnInit() { }

}
