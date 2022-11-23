import { Author } from '../models/author';
import { Site } from '../models/site';

export const appFeatureKey = 'app';

export interface State {
  /**
   * ローディング状態
   */
  loading: Set<string>;

  /**
   * サイト情報
   */
  site?: Site;

  /**
   * 著者
   */
  author?: Author;
}

export const initialState: State = {
  loading: new Set<string>(),
  site: {
    title: 'あら散歩',
    subTitle: '',
    theme: 'default',
    cover: {
      coverType: 'video',
      filterType: 'dot',
      coverVideoUrl: 'https://4mo.co/wp-content/uploads/2021/02/top.mp4',
      coverImageUrl: 'https://4mo.co/wp-content/uploads/2021/02/top.jpg',
    },
    article: {
      columns: 1,
      listType: 'card',
    },
  },
  author: undefined,
};
