import { Entity } from './entity';

export interface ListEntity<T extends Entity> {
  ids: string[];
  entities: Map<string, T>;

  get(id: string): T | undefined;

  getAll(): T[];

  add?(items: T[], noIndex?: boolean): ListEntity<T>;

  update?(items: T[]): ListEntity<T>;
}

export class ListEntityImpl<T extends Entity> implements ListEntity<T> {
  entities: Map<string, T> = new Map<string, T>();
  ids: string[] = [];

  constructor(items: T[]) {
    this.add(items);
  }

  get(id: string): T | undefined {
    return this.entities.get(id) as T;
  }

  getAll(): T[] {
    return this.ids.map((id) => this.entities.get(id) as T);
  }

  add(items: T[], noIndex?: boolean): ListEntity<T> {
    items.forEach((item) => {
      if (typeof noIndex === 'undefined' || !noIndex) {
        this.ids.push(item.id);
      }
      this.entities.set(item.id, item);
    });
    return this;
  }

  update(items: T[]): ListEntity<T> {
    items.forEach((item) => {
      if (this.entities.has(item.id)) {
        this.entities.set(item.id, item);
      }
    });
    return this;
  }
}
