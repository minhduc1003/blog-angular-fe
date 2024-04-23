import { Author } from './IBlog';

export interface BlogDto {
  title: string;
  description: string;
  authorId: string;
  categoryId: string;
  imageId: string;
}
