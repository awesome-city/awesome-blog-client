import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input()
  set breadcrumbs(value: Breadcrumb[]) {
    this._breadcrumbs = [home, ...value];
  }

  get breadcrumbs(): Breadcrumb[] {
    return this._breadcrumbs;
  }

  private _breadcrumbs: Breadcrumb[] = [];
}

export interface Breadcrumb {
  name: string;
  icon?: string;
  link?: string;
}

const home: Breadcrumb = {
  name: 'home',
  icon: 'bi bi-house',
  link: '/',
};
