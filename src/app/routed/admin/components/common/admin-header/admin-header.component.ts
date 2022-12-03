import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { appSelectors } from '../../../../../store/selectors/app.selector';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  site$ = this.store.pipe(select(appSelectors.getSite));

  header: HeaderMenu[] = [];

  constructor(private store: Store) {
    this.header = [
      {
        iconClass: 'bi bi-plus',
        subs: [
          {
            title: '新規記事',
            link: ['/admin', 'articles', 'draft'],
          },
        ],
      },
      {
        iconClass: 'bi bi-person-circle',
        subs: [
          {
            title: '個人設定',
            link: ['/me', 'profile'],
          },
          {
            title: 'ログアウト',
            onClick: this.onClickSignOut,
          },
        ],
      },
    ];
  }

  onClickMenu(e: Event) {
    const elem = e.target as HTMLInputElement;
    elem.style.display = 'none';
    setTimeout(() => {
      elem.style.display = '';
    }, 10);
  }

  onClickSignOut() {
    console.log('logout.');
  }
}

interface HeaderMenu {
  iconClass: string;
  subs: SubMenu[];
}

interface SubMenu {
  title: string;
  link?: string[];
  onClick?: (e: Event) => void;
}
