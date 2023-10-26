import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/type/ICategory';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() author: string = '';
  @Input() category: Category = {
    id: '',
    name: '',
  };
}
