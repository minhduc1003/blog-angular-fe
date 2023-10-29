import { Component } from '@angular/core';
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
  constructor(private auth_service: AuthService) {}
  handleSubmit(): void {
    this.auth_service
      .register(this.userName, this.email, this.password)
      .subscribe((data) => console.log(data));
  }
}
