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

  constructor(private store: Store) {}

  onClickMenu(e: Event) {
    const elem = e.target as HTMLInputElement;
    elem.style.display = 'none';
    setTimeout(() => {
      elem.style.display = '';
    }, 10);
  }

  onClickSignOut() {}
}
