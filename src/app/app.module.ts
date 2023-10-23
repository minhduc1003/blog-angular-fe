import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
