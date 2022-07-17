import { IAuthor } from './author';

export interface IPost {
  slug: string;
  title: string;
  date: Date;
  coverImage: string;
  author: IAuthor;
  birbName: string;
  birbLink: string;
  tags: string[];
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}
