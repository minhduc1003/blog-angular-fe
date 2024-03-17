import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { BlogDto } from 'src/app/type/IBlogDto';
import { Category } from 'src/app/type/ICategory';
import { Image } from 'src/app/type/IImage';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  categoryList: Category[] = [];
  image: Image = {
    id: '',
    filePath: '',
  };
  blog: BlogDto = {
    title: '',
    description: '',
    author: '',
    categoryId: '',
    imageId: '',
  };
  title: string = '';
  author: string = '';
  categoryIdSelected: string = '';
  categoryName: string = '';
  dropDownOpen: boolean = false;
  editorValue: string = '';
  disabledUploadImage: boolean = false;
  constructor(private blog_service: BlogService) {}

  getValue(id: string, name: string) {
    this.categoryIdSelected = id;
    this.categoryName = name;
  }
  ngOnInit(): void {
    this.blog_service.getCategory().subscribe((category) => {
      this.categoryList = category;
    });
  }
  handleOpen(): void {
    this.dropDownOpen = !this.dropDownOpen;
  }
  handleSubmit(): void {
    this.blog.author = this.author;
    this.blog.categoryId = this.categoryIdSelected;
    this.blog.imageId = this.image.id;
    this.blog.title = this.title;
    this.blog.description = this.editorValue;
    this.blog_service.createBlog(this.blog).subscribe((res) => {
    });
  }
  handleUpload(e: any): void {
    if (e.target.files[0]) {
      this.blog_service.uploadImage(e.target.files[0]).subscribe((data) => {
        this.image = data;
        this.disabledUploadImage = true;
      });
    }
  }
}
