import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'Msite-home',
  templateUrl: './Msite-home.component.html',
  styleUrls: ['./Msite-home.component.css']
})
export class MsiteHomeComponent {

  public filterText: string = '';


  getName($event: string): void {
    this.filterText = $event;
  }
}
