import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class AddPostComponent {
  public credentials = {
    image: '',
    text: '',
    title: '',
  };

  constructor(private authService: AuthService,private dataService: DataService, public router: Router) {
  }

  ngOnInit() {
  }

  addPost() {
    if(this.authService.isLoggedIn()) {
      this.dataService.createPost(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }

}
