import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DataService } from '../../services/data.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'Msite',
  templateUrl: './Msite.component.html',
  styleUrls: ['./Msite.component.css']
})

export class MsiteComponent implements OnInit {
  @Input() filterText: string = '';

  // @ts-ignore
  public items$ :any;
  offset: number = 0;
  pageSize: number = 6;

  sortDescending: boolean = true; // Initial sorting order
  selectedFilter: string = 'order';
  isLog: boolean = false;
  user: string = '';

  toggleSortOrder() {
    this.sortDescending = !this.sortDescending;
  }
  constructor(private authService: AuthService,private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
    if(this.authService.isLoggedIn()){
      this.isLog = true;
      this.user = this.authService.currentUser.name;

    }


  }
  nextPage() {
    if (this.offset + this.pageSize < this.items$.length) {
      this.offset += this.pageSize;
    }
  }

  previousPage() {
    if (this.offset - this.pageSize >= 0) {
      this.offset -= this.pageSize;
    }
  }
  getAll(){
    this.service.getAll().subscribe(response => {

      this.items$ = response;
    });
  }

}
