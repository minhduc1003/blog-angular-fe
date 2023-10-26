import { Category } from './ICategory';

export interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  categoryId: string;
  category: Category;
}
