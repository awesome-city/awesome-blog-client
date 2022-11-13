import { createAction, props } from '@ngrx/store';
import { Tag } from '../../../../models/tag';

export const loadTags = createAction('[Tag] load');

export const loadTagsSuccess = createAction('[Tag] load - Success', props<{ tags: Tag[] }>());

export const loadTagsFailure = createAction('[Tag] load - Failure');
