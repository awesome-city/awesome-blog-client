export interface Entity<T> {
  ids: string[],
  entities: Map<string, T>;
}
