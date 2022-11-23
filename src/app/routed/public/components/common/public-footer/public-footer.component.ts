import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appSelectors } from '../../../../../store/selectors/app.selector';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss'],
})
export class PublicFooterComponent {
  site$ = this.store.select(appSelectors.getSite);
  today = new Date();
  constructor(private store: Store) {}
}
