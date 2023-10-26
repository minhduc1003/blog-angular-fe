import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/type/IBlog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUlr = 'https://localhost:7076/api/blog';

  constructor(private http: HttpClient) {}
  getAllBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUlr);
  }
  getById(blogId: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUlr}/${blogId}`);
  }
}
