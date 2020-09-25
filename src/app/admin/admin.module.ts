import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OverlayscrollbarsModule
  ]
})
export class AdminModule { }
