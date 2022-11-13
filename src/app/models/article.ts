import { Tag } from './tag';
import { Author } from './author';

/**
 * 記事
 */
export interface Article {
  /**
   * 記事ID
   */
  id: string;

  /**
   * タイトル
   */
  title: string;

  /**
   * タグ
   */
  tags: Tag[];

  /**
   * サムネイルURL
   */
  thumbnailUrl: string;

  /**
   * カバー画像URL
   */
  coverImageUrl: string;

  /**
   * 要約
   */
  summary: string;

  /**
   * 本文
   */
  body: string;

  /**
   * 公開日
   */
  publishAt: string;

  /**
   * 更新日
   */
  updateAt?: string;

  /**
   * 著者
   */
  author: Author;
}
