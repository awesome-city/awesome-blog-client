import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {
  sidebar: SideMenu[] = [];

  constructor() {
    this.sidebar = [
      {
        title: 'Dashboard',
        iconClass: 'bi bi-speedometer',
        link: ['/admin', 'dashboard'],
      },
      {
        title: 'Articles',
        iconClass: 'bi bi-journal',
        subs: [
          {
            title: '記事一覧',
            link: ['/admin', 'articles'],
          },
          {
            title: '新規記事',
            link: ['/admin', 'articles', 'draft'],
          },
        ],
      },
      {
        title: 'Settings',
        iconClass: 'bi bi-gear',
        subs: [
          {
            title: '基本設定',
            link: ['/admin', 'settings', 'basic'],
          },
        ],
      },
    ];
  }

  onClickMenu(e: Event) {
    const elem = e.target as HTMLInputElement;
    if (elem.parentElement) {
      elem.parentElement.style.display = 'none';
      setTimeout(() => {
        if (elem.parentElement) {
          elem.parentElement.style.display = '';
        }
      }, 10);
    }
  }
}

interface SideMenu {
  title: string;
  iconClass: string;
  link?: string[];
  subs?: SubMenu[];
}

interface SubMenu {
  title: string;
  link: string[];
}
