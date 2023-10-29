import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent {
  show = false;
  handleSwitch() {
    this.show = !this.show;
  }
  ngDoCheck(): void {
    this.passwordEvent.emit(this.password);
  }

  @Output() passwordEvent = new EventEmitter<string>();
  password: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
}
