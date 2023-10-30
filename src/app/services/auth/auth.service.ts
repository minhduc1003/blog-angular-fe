import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUlr = 'https://localhost:7076/api/Auth';
  token: string | undefined = '';
  constructor(private http: HttpClient, private cookie: CookieService) {}
  login(email: string, password: string): Observable<any> {
    const data = {
      email,
      password,
    };
    return this.http.post<{ token: string }>(`${this.apiUlr}/login`, data);
    // new Promise<string>(() => {
    //   this.http
    //     .post<{ token: string }>(`${this.apiUlr}/login`, data)
    //     .toPromise()
    //     .then((res) => {
    //       const token = res?.token;
    //       this.token = token;
    //       if (token) {
    //         localStorage.setItem('token', token);
    //       }
    //     });
    // });
  }
  register(userName: string, email: string, password: string): Observable<any> {
    const data = {
      userName,
      password,
      email,
    };

    return this.http.post<any>(`${this.apiUlr}/Register`, data);
  }
  isLogin(): boolean {
    if (this.cookie.get('token') == null) {
      return false;
    } else {
      return true;
    }
  }
}
