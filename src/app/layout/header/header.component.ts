import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  ngOnInit(): void {
    !localStorage.getItem('token') == true
      ? (this.isLogin = true)
      : (this.isLogin = false);
  }
}
