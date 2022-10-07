import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticlePageComponent} from './article-page.component';
import {provideMockStore} from "@ngrx/store/testing";

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlePageComponent],
      providers: [provideMockStore({})]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
