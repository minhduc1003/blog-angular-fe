import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  name: string = '';
  constructor(private blog_service: BlogService) {}

  handleSubmit(): void {
    this.blog_service.createCategory({ name: this.name }).subscribe((res) => {
      console.log(res);
    });
  }
}
