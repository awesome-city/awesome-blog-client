import { Component } from '@angular/core';
import { appSelectors } from '../../../../../store/selectors/app.selector';
import { Store } from '@ngrx/store';
import { State } from '../../../../../store/app.state';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent {
  site$ = this.store.select(appSelectors.getSite);

  constructor(private store: Store<State>) {}
}
