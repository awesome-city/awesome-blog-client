import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPageComponent } from './tag-page.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('TagPageComponent', () => {
  let component: TagPageComponent;
  let fixture: ComponentFixture<TagPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagPageComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(TagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
