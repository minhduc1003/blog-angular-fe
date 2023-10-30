import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Blog } from 'src/app/type/IBlog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isLogIn: boolean = false;
  blog: Blog[] = [];
  constructor(private blog_services: BlogService) {}
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogIn = true;
    } else {
      this.isLogIn = false;
    }
    this.blog_services.getAllBlog().subscribe({
      next: (blog) => {
        this.blog = blog;
        console.log(blog);
      },
    });
  }
  ngOnDestroy(): void {
    this.blog = [];
  }
}
