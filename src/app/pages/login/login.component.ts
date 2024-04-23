import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  setText(value: string): void {
    this.email = value;
  }
  setPassword(value: string): void {
    this.password = value;
  }
  constructor(
    private auth_service: AuthService,
    private router: Router,
    private cookie: CookieService
  ) {}
  handleSubmit(): void {
    // this.auth_service.login(this.email, this.password);
    this.auth_service.login(this.email, this.password).subscribe((data) => {
      this.cookie.set('token', data.token, new Date().getDate() + 1);
      this.cookie.set('userId', data.id);
      this.router.navigate(['/']);
    });
  }
}
