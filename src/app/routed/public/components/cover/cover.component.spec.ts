import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverComponent } from './cover.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('CoverComponent', () => {
  let component: CoverComponent;
  let fixture: ComponentFixture<CoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoverComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
