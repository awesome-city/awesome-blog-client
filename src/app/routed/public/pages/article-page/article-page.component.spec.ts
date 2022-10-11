import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticlePageComponent} from './article-page.component';
import {provideMockStore} from "@ngrx/store/testing";
import {ActivatedRoute} from "@angular/router";

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlePageComponent],
      imports: [ActivatedRoute],
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
