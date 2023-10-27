import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUlr = 'https://localhost:7076/api/Auth';
  token: string | undefined = '';
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Promise<string> {
    const data = {
      email,
      password,
    };
    const promise = new Promise<string>((res, rej) => {
      this.http
        .post<{ token: string }>(`${this.apiUlr}/login`, data)
        .toPromise()
        .then((res) => {
          const token = res?.token;
          this.token = token;
          if (token) {
            localStorage.setItem('token', token);
          }
        });
    });
    return promise;
  }
}
