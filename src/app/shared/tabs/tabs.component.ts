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

  ngOnInit() {
    let classes = '';
    for(let count = 1; count <= 20; count++) {
      classes = `${classes}\n.font-${count * 2} { font-size: ${count * 2}px !important}`;
    }
    console.log(classes);
  }

}
