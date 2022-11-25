import { Component } from '@angular/core';
import { appSelectors } from '../../../../../store/selectors/app.selector';
import { Store } from '@ngrx/store';
import { State } from '../../../../../store/app.state';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent {
  site$ = this.store.select(appSelectors.getSite);

  constructor(private store: Store<State>) {}
}
