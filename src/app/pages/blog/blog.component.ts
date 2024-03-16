import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Blog } from 'src/app/type/IBlog';
import { Category } from 'src/app/type/ICategory';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data:any=[]
  constructor(private blog_service: BlogService) {}
  ngOnInit(): void {
    this.blog_service.getCategory().subscribe(res => {
      res.forEach(item => {
        this.blog_service.getByCategoryId(item.id).subscribe(child => {
          this.data.push({
            name:item.name,
            data: child
          })
        });

      });
    });
    console.log(this.data);
  }
}
