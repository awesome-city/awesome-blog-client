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
   * カバー画像URL
   */
  coverImageUrl: string;

  /**
   * テーマ
   */
  theme: Theme;

  /**
   * Google Analytics トラッキングコード
   */
  GATrackingCode: string;
}

/**
 * サイトテーマ
 * TODO: 設定画面で変更可能とする
 */
export type Theme = 'default' | 'dark' | 'light';
