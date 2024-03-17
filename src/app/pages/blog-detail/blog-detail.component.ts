import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Blog } from 'src/app/type/IBlog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  constructor(private blog_service: BlogService) {}
  blog: Blog = {
    author: '',
    categoryId: '',
    description: '',
    id: '',
    title: '',
    category: {
      id: '',
      name: '',
    },
    imageId: '',
    image: {
      id: '',
      fileDescription: '',
      fileExtension: '',
      fileName: '',
      filePath: '',
      fileSizeInByte: 0,
    },
  };
  @Input() id: string = '';
  ngOnInit(): void {
    this.blog_service.getById(this.id).subscribe({
      next: (blog) => {
        this.blog = blog;
      },
    });
  }
  ngOnDestroy(): void {
    this.blog = {
      author: '',
      categoryId: '',
      description: '',
      id: '',
      title: '',
      category: {
        id: '',
        name: '',
      },
      imageId: '',
      image: {
        id: '',
        fileDescription: '',
        fileExtension: '',
        fileName: '',
        filePath: '',
        fileSizeInByte: 0,
      },
    };
  }
}
