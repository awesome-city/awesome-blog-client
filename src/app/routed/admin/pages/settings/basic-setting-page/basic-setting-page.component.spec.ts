import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSettingPageComponent } from './basic-setting-page.component';

describe('BasicSettingPageComponent', () => {
  let component: BasicSettingPageComponent;
  let fixture: ComponentFixture<BasicSettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSettingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
