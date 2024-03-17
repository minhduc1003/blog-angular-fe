import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/type/IBlog';
import { BlogDto } from 'src/app/type/IBlogDto';
import { Category } from 'src/app/type/ICategory';
import { CategoryDto } from 'src/app/type/ICategoryDto';
import { Image } from 'src/app/type/IImage';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUlr = 'https://localhost:7076/api';

  constructor(private http: HttpClient, private cookie: CookieService) {}
  getAllBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUlr}/blog`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
  getById(blogId: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUlr}/blog/${blogId}`);
  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUlr}/category`);
  }
  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('FormFile', image);
    return this.http.post<any>(
      `${this.apiUlr}/image/upload`,
      formData
    );
  }
  createBlog(data: BlogDto): Observable<BlogDto> {
    return this.http.post<BlogDto>(`${this.apiUlr}/blog`, data);
  }
  createCategory(data: CategoryDto): Observable<Category> {
    return this.http.post<Category>(
      `${this.apiUlr}/category`,
      data
    );
  }
  getByCategoryId(categoryId: string): Observable<Blog[]>{
    return this.http.get<Blog[]>(`${this.apiUlr}/blog/findCategory/${categoryId}`);
  }
}
