import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { AuthGuard } from './Guard/auth.guard';
import { CategoryComponent } from './pages/category/category.component';
import { MyBlogComponent } from './pages/my-blog/my-blog.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'my-blog',
        component: MyBlogComponent,
      },
      {
        path: 'blog/:id',
        component: BlogDetailComponent,
      },
      {
        path: 'my-blog/:id',
        component: BlogDetailComponent,
      },
      {
        path: 'create',
        component: CreateBlogComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
