import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public filterText: string = '';

  @Output() name = new EventEmitter<string>();

  sendFilter() {
    this.name.emit(this.filterText);
  }

}

