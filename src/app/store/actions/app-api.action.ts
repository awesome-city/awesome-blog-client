import { createActionGroup, props } from '@ngrx/store';
import { GetSiteResponse } from '../../models/http/site/get-site-response';
import { Site } from '../../models/entity/site';
import { PutSiteResponse } from '../../models/http/site/put-site-response';

export const AppApiAction = createActionGroup({
  source: 'App API',
  events: {
    // サイト設定
    'load site': props<any>(),
    'load site success': props<{ result: GetSiteResponse }>(),
    'load site failure': props<{ error: any }>(),
    'save site': props<{ site: Site }>(),
    'save site success': props<{ result: PutSiteResponse }>(),
    'save site failure': props<{ error: any }>(),
  },
});
