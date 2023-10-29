import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    console.log(value);
  }
  setPassword(value: string): void {
    this.password = value;
    console.log(value);
  }
  constructor(private auth_service: AuthService) {}
  handleSubmit(): void {
    this.auth_service.login(this.email, this.password);
  }
}
