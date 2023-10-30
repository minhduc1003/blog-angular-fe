import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  setPassword(value: string): void {
    this.password = value;
  }
  constructor(private auth_service: AuthService, private router: Router) {}
  handleSubmit(): void {
    this.auth_service
      .register(this.userName, this.email, this.password)
      .subscribe(() => this.router.navigate(['/login']));
  }
}
