import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopPageComponent} from './top-page.component';
import {provideMockStore} from "@ngrx/store/testing";

describe('TopPageComponent', () => {
  let component: TopPageComponent;
  let fixture: ComponentFixture<TopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopPageComponent],
      providers: [provideMockStore({})]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
