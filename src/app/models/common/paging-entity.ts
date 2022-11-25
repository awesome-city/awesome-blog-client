/**
 * 汎用ページングモデル
 */
import { ListEntity, ListEntityImpl } from './list-entity';
import { Entity } from './entity';

export interface PagingEntity<T extends Entity> extends ListEntity<T> {
  lastEvaluatedKey?: string;
}

export class PagingEntityImpl<T extends Entity> extends ListEntityImpl<T> implements PagingEntity<T> {}
