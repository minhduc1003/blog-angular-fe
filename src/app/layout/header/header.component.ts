import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  constructor(private cookie: CookieService) {}
  ngOnInit(): void {
    !this.cookie.get('token') == true
      ? (this.isLogin = true)
      : (this.isLogin = false);
  }
}
