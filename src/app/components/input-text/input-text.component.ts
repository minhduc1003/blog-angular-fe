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
    this.textEvent.emit(this.text);
  }

  @Output() textEvent = new EventEmitter<string>();
  text: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
}
