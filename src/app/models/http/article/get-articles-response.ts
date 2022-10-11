import {Article} from "../../article";

export interface GetArticlesResponse {
  list: Article[],
  lastEvaluatedKey?: string
}
