import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: Breadcrumb[];
  private breadcrumbSubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbSubscription = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      distinctUntilChanged()
    ).subscribe(_ => {
      this.breadcrumbs = this.build(this.activatedRoute.root);
    });
  }

  get title(): string {
    return this.breadcrumbs[this.breadcrumbs.length - 1].label || '';
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.breadcrumbSubscription.unsubscribe();
  }

  build(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${ url }/${ path }` : url;

    const breadcrumb: Breadcrumb = {
      label,
      url: nextUrl
    };

    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    return route.firstChild ? this.build(route.firstChild, nextUrl, newBreadcrumbs) : newBreadcrumbs;
  }
}
