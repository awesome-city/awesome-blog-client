import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appSelectors } from '../../../../../store/selectors/app.selector';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss'],
})
export class PublicFooterComponent implements OnInit, OnDestroy {
  site$ = this.store.select(appSelectors.getSite);
  sub$ = new Subscription();
  today = new Date();
  position: 'sticky' | 'block' = 'block';
  top?: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.sub$.add(
      fromEvent(window, 'resize')
        .pipe(throttleTime(100))
        .subscribe((_) => {
          this.adjustFooterPosition();
        })
    );
    this.adjustFooterPosition();
  }

  private adjustFooterPosition() {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    if (windowHeight > bodyHeight) {
      this.position = 'sticky';
      const elems = document.getElementsByName('footer');
      if (elems && elems.length > 0) {
        this.top = windowHeight - elems[0].clientHeight;
      }
    } else {
      this.position = 'block';
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
