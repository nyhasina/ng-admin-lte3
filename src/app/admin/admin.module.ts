import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [AdminComponent, NavbarComponent, SidebarComponent, FooterComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OverlayscrollbarsModule
  ]
})
export class AdminModule { }
