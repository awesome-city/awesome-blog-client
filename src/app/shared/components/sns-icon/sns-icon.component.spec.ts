import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsIconComponent } from './sns-icon.component';

describe('SnsIconComponent', () => {
  let component: SnsIconComponent;
  let fixture: ComponentFixture<SnsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnsIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
