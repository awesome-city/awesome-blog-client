/**
 * サイト
 */
export interface Site {
  /**
   * サイトタイトル
   */
  title: string;

  /**
   * サブタイトル
   */
  subTitle: string;

  /**
   * ヘッダー設定
   */
  header: Header;

  /**
   * カバー設定
   */
  cover: Cover;

  /**
   * 記事設定
   */
  article: Article;

  /**
   * SNS設定
   */
  sns: SNS[];

  /**
   * テーマ
   */
  theme: Theme;

  /**
   * Google Analytics トラッキングコード
   */
  GATrackingCode?: string;
}

/**
 * ヘッダー設定
 */
export interface Header {
  subTitleBarColor: typeof SubTitleBarColorType[number];
  subTitleBarTextColor: 'white' | 'black';
}

export const SubTitleBarColorType = ['#ff8888', '#8fff9e'] as const;

/**
 * カバー設定
 */
export interface Cover {
  /**
   * カバータイプ
   */
  coverType: typeof CoverType[number];

  /**
   * フィルタータイプ
   */
  filterType: typeof FilterType[number];

  /**
   * カバー動画URL
   */
  coverVideoUrl?: string;

  /**
   * カバー画像URL
   */
  coverImageUrl?: string;
}

/**
 * カバータイプ
 */
export const CoverType = ['video', 'image', 'none'] as const;

/**
 * フィルタータイプ
 */
export const FilterType = ['dot', 'none'] as const;

/**
 * 記事設定
 */
export interface Article {
  listType: typeof ArticleListType[number];
}

/**
 * 記事一覧表示タイプ
 */
export const ArticleListType = ['list', 'card'] as const;

/**
 * SNS設定
 */
export interface SNS {
  /**
   * SNSタイプ
   */
  type: ProfileSNSType;

  /**
   * リンク
   */
  link: string;
}

/**
 * 対応ProfileSNS
 */
export const SupportedProfileSNS = [
  'facebook',
  'twitter',
  'instagram',
  'github',
  'amazon_wishlist',
  'rss',
  'mail',
] as const;

/**
 * SNSタイプ
 */
export type ProfileSNSType = typeof SupportedProfileSNS[number];

/**
 * サイトテーマ
 * TODO: 設定画面で変更可能とする
 */
export type Theme = 'default' | 'dark' | 'light';
