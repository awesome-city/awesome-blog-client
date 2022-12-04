import { createActionGroup, props } from '@ngrx/store';
import { Article } from '../../../../models/entity/article';

export const AdminViewAction = createActionGroup({
  source: 'Admin View',
  events: {
    'load articles': props<any>(),
    'load article': props<{ id: string }>(),
    'save article': props<{ article: Article }>(),
    'publish article': props<{ id: string }>(),
    'delete article': props<{ id: string }>(),
  },
});
