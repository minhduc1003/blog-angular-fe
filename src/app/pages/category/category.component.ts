import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  name: string = '';
  constructor(
    private blog_service: BlogService,
    private _toastService: ToastService,
    private router: Router
  ) {}

  handleSubmit(): void {
    this.blog_service.createCategory({ name: this.name }).subscribe((res) => {
      this._toastService.success('Category Created Successfully');
      this.router.navigate(['/create']);
    });
  }
}
