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
   * カバー設定
   */
  cover: Cover;

  /**
   * 記事設定
   */
  article: Article;

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
  columns: typeof SupportedArticleListColumn[number] | typeof SupportedArticleCardColumn[number];
}

/**
 * 記事一覧表示タイプ
 */
export const ArticleListType = ['list', 'card'] as const;

/**
 * 記事一覧リスト型カラム数
 */
export const SupportedArticleListColumn = [1, 2] as const;

/**
 * 記事一覧カード型カラム数
 */
export const SupportedArticleCardColumn = [1, 2, 3, 4] as const;

/**
 * サイトテーマ
 * TODO: 設定画面で変更可能とする
 */
export type Theme = 'default' | 'dark' | 'light';
