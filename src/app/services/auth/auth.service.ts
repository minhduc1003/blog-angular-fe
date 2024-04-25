import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUlr = 'http://ducozil1003.io.vn:9001/api/Auth';
  token: string | undefined = '';
  constructor(private http: HttpClient, private cookie: CookieService) {}
  login(email: string, password: string): Observable<any> {
    const data = {
      email,
      password,
    };
    return this.http.post<{ token: string }>(`${this.apiUlr}/login`, data);
  }
  register(
    fullName: string,
    userName: string,
    email: string,
    password: string
  ): Observable<any> {
    const data = {
      fullName,
      userName,
      password,
      email,
    };

    return this.http.post<any>(`${this.apiUlr}/Register`, data);
  }
  isLogin(): boolean {
    if (this.cookie.get('token-blog') == null) {
      return false;
    } else {
      return true;
    }
  }
  getUser() {
    return this.http.get<any>(
      `${this.apiUlr}/getUserById/${this.cookie.get('userId')}`
    );
  }
}
