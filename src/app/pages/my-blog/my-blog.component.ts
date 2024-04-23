import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.scss'],
})
export class MyBlogComponent implements OnInit {
  data: any = [];
  constructor(private blog_service: BlogService) {}
  ngOnInit(): void {
    this.blog_service.GetByUserCreated().subscribe((child) => {
      this.data = child;
    });
  }
}
