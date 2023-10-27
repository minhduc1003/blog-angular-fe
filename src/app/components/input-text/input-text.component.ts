import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements DoCheck {
  ngDoCheck(): void {
    this.newItemEvent.emit(this.password);
  }

  @Output() newItemEvent = new EventEmitter<string>();
  password: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
}
