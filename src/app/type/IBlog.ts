import { Category } from './ICategory';
import { Image } from './IImage';

export interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  categoryId: string;
  category: Category;
  imageId: string;
  image: Image;
}
