import { Component, OnInit } from '@angular/core';

export const SCROLLBAR_OPTIONS = {
  scrollbars: {
    autoHide: 'scroll'
  }
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  options = SCROLLBAR_OPTIONS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
