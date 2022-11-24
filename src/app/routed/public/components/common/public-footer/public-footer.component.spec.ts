import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFooterComponent } from './public-footer.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PublicFooterComponent', () => {
  let component: PublicFooterComponent;
  let fixture: ComponentFixture<PublicFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicFooterComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
