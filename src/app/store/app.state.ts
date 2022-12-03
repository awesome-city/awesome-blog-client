import { Author } from '../models/entity/author';
import { Site } from '../models/entity/site';

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
    subTitle: 'まだ見たことのない荒川の世界を発信！',
    theme: 'default',
    header: {
      subTitleBarColor: '#ff8888',
      subTitleBarTextColor: 'white',
    },
    cover: {
      coverType: 'video',
      filterType: 'dot',
      coverVideoUrl: 'https://4mo.co/wp-content/uploads/2021/02/top.mp4',
      coverImageUrl: 'https://4mo.co/wp-content/uploads/2021/02/top.jpg',
    },
    article: {
      listType: 'card',
    },
    sns: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/4moco/',
      },
      {
        type: 'twitter',
        link: 'https://twitter.com/4mo_c',
      },
      {
        type: 'instagram',
        link: 'https://www.instagram.com/4mo_co',
      },
      {
        type: 'amazon_wishlist',
        link: 'https://example.com',
      },
    ],
  },
  author: undefined,
};
