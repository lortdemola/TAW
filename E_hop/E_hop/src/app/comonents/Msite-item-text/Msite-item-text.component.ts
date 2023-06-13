import {Component, Input, OnInit} from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'Msite-item-text',
  templateUrl: './Msite-item-text.component.html',
  styleUrls: ['./Msite-item-text.component.css']
})
export class MsiteItemTextComponent  implements OnInit {

  @Input() text?: string;
  @Input() price?: string;
  @Input() id?: number;
  buttonText: string = 'check out';

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly style = style;
  protected readonly Number = Number;
}
