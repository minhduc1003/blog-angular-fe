import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  fullName:string =''
  userName: string = '';
  email: string = '';
  password: string = '';
  errorMessage:{
    userName:string,
    email:string
  } = {
    userName:'',
    email:''
  };
  setPassword(value: string): void {
    this.password = value;
  }
  constructor(private auth_service: AuthService, private router: Router) {}
  handleSubmit(): void {
    const regexUserName = /\s/;
    let regexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(regexUserName.test(this.userName)||this.userName==""){
      this.errorMessage.userName = 'Username cannot contain space';
    }else{
      this.errorMessage.userName = '';
    }
    if(!this.email.match(regexEmail)){
      this.errorMessage.email = 'Invalid email';
    }else{
      this.errorMessage.email = '';
    }
    if(!regexUserName.test(this.userName)&&regexEmail.test(this.email)){
      this.auth_service
      .register(this.fullName,this.userName, this.email, this.password)
      .subscribe(() => this.router.navigate(['/login']));
    }
  }
}
