import { Component, OnInit } from '@angular/core';
import { SCROLLBAR_OPTIONS } from './admin.constants';

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
