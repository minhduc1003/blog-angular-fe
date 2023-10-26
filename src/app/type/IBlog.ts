import { Category } from './ICategory';

export interface Blog {
  Id: string;
  Title: string;
  Description: string;
  Author: string;
  CategoryId: string;
  Category: Category;
}
