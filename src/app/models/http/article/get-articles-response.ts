import { Article } from '../../entity/article';

export interface GetArticlesResponse {
  list: Article[];
  lastEvaluatedKey?: string;
}
