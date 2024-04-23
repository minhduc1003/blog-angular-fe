import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth/auth.service';
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
    authorId: '',
    categoryId: '',
    imageId: '',
  };

  title: string = '';
  authorName: string = '';
  categoryIdSelected: string = '';
  categoryName: string = '';
  dropDownOpen: boolean = false;
  editorValue: string = '';
  disabledUploadImage: boolean = false;
  constructor(
    private blog_service: BlogService,
    private auth_service: AuthService,
    private _toastService: ToastService
  ) {}

  getValue(id: string, name: string) {
    this.categoryIdSelected = id;
    this.categoryName = name;
  }
  ngOnInit(): void {
    this.blog_service.getCategory().subscribe((category) => {
      this.categoryList = category;
    });
    this.auth_service.getUser().subscribe((user) => {
      this.authorName = user.name;
      this.blog.authorId = user.userId;
    });
  }
  handleOpen(): void {
    this.dropDownOpen = !this.dropDownOpen;
  }
  handleSubmit(): void {
    this.blog.categoryId = this.categoryIdSelected;
    this.blog.imageId = this.image.id;
    this.blog.title = this.title;
    this.blog.description = this.editorValue;
    if (
      this.image.id == '' ||
      this.categoryIdSelected == '' ||
      this.title == '' ||
      this.editorValue == '' ||
      this.editorValue == null
    ) {
      this._toastService.error('fill all fields');
      return;
    }
    console.log(this.blog);
    this.blog_service.createBlog(this.blog).subscribe((res) => {
      this.categoryName = '';
      this.categoryIdSelected = '';
      this.image.id = '';
      this.image.filePath = '';
      this.title = '';
      this.editorValue = '';
      this.disabledUploadImage = false;
      this._toastService.success('uploaded successfully');
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
