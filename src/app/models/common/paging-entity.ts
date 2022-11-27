/**
 * 汎用ページングモデル
 */
import { ListEntity, ListEntityImpl } from './list-entity';
import { Entity } from './entity';

export interface PagingEntity<T extends Entity> extends ListEntity<T> {
  lastEvaluatedKey?: string;

  addWithLastEvaluatedKey?(list: T[], lastEvaluatedKey?: string): PagingEntity<T>;
}

export class PagingEntityImpl<T extends Entity> extends ListEntityImpl<T> implements PagingEntity<T> {
  lastEvaluatedKey?: string;

  constructor(items: T[], lastEvaluatedKey?: string) {
    super(items);
    this.lastEvaluatedKey = lastEvaluatedKey;
  }

  addWithLastEvaluatedKey(items: T[], lastEvaluatedKey?: string): PagingEntity<T> {
    super.add(items);
    this.lastEvaluatedKey = lastEvaluatedKey;
    return this;
  }
}
