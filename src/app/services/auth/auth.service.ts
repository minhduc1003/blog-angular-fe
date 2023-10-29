import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUlr = 'https://localhost:7076/api/Auth';
  token: string | undefined = '';
  constructor(private http: HttpClient) {}
  login(email: string, password: string): void {
    const data = {
      email,
      password,
    };
    new Promise<string>(() => {
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
  }
  register(userName: string, email: string, password: string): Observable<any> {
    const data = {
      userName,
      password,
      email,
    };

    return this.http.post<any>(`${this.apiUlr}/Register`, data);
  }
}
