import { Component, OnInit } from '@angular/core';

export const SCROLLBAR_OPTIONS = {
  scrollbars: {
    autoHide: 'scroll'
  }
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  options = SCROLLBAR_OPTIONS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
