import { Entity } from './entity';

export interface ListEntity<T extends Entity> {
  ids: string[];
  entities: Map<string, T>;
}

export class ListEntityImpl<T extends Entity> implements ListEntity<T> {
  entities: Map<string, T> = new Map<string, T>();
  ids: string[] = [];

  add(...items: T[]) {
    const nextIndex = this.ids.length;
    items.forEach((item, i) => {
      this.ids.push(item.id);
      this.entities.set(item.id, item);
    });
  }

  update(...items: T[]) {
    items.forEach((item) => {
      if (this.entities.has(item.id)) {
        this.entities.set(item.id, item);
      }
    });
  }
}
