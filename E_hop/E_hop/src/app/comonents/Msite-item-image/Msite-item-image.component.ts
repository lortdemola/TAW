import {Component, Input} from '@angular/core';

@Component({
  selector: 'Msite-item-image',
  templateUrl: './Msite-item-image.component.html',
  styleUrls: ['./Msite-item-image.component.css']
})
export class MsiteItemImageComponent {
  @Input() image?: string;
}
