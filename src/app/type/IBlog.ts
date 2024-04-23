import { Category } from './ICategory';
import { Image } from './IImage';

export interface Blog {
  id: string;
  title: string;
  description: string;
  author: Author;
  categoryId: string;
  category: Category;
  imageId: string;
  image: Image;
}
export interface Author {
  id: string;
  name: string;
}
