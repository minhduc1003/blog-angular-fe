import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/type/ICategory';
import { Image } from 'src/app/type/IImage';

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
  @Input() page: boolean = true;
  @Input() category: Category = {
    id: '',
    name: '',
  };
  @Input() image: Image = {
    id: '',
    fileDescription: '',
    fileExtension: '',
    fileName: '',
    filePath: '',
    fileSizeInByte: 0,
  };
}
