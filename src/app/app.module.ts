import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TypeOfContentComponent } from './pages/home/components/type-of-content/type-of-content.component';
import { DayOfAuthorComponent } from './pages/home/components/day-of-author/day-of-author.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { FormsModule } from '@angular/forms';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { QuillModule } from 'ngx-quill';
import { RouterModule } from '@angular/router';
import { CardItemComponent } from './pages/home/components/card-item/card-item.component';
import { provideHttpClient } from '@angular/common/http';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    TypeOfContentComponent,
    DayOfAuthorComponent,
    BlogDetailComponent,
    LoginComponent,
    MainLayoutComponent,
    SignupComponent,
    InputTextComponent,
    InputPasswordComponent,
    CreateBlogComponent,
    CardItemComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ script: 'sub' }, { script: 'super' }],
          ['link'],
        ],
      },
    }),
  ],
  providers: [provideHttpClient(), CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
