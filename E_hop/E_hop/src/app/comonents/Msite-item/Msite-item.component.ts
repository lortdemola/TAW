import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'Msite-item',
  templateUrl: './Msite-item.component.html',
  styleUrls: ['./Msite-item.component.css']
})
export class MsiteItemComponent implements OnInit {
  @Input() item?: any;
  public image: string = '';
  public title: string = '';
  public description: string = '';
  public price: string = '';
  public seller: string = '';
  public id: number = 0;


  ngOnInit(): void {
    this.image = this.item.image ;
    this.title = this.item.title ;
    this.description = this.item.description ;
    this.price  = this.item.price ;
    this.seller = this.item.seller ;
    this.id = this.item.id;
  }

  protected readonly String = String;
}
