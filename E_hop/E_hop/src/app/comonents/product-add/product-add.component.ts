import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class AddProductComponent {
  public credentials = {
    image: '',
    title: '',
    description: '',
    price: '',
    seller:this.authService.currentUser.name,


  };

  constructor(private authService: AuthService,private dataService: DataService, public router: Router) {
  }

  ngOnInit() {
  }

  addPost() {
    if(this.authService.isLoggedIn()) {
      this.dataService.createProduct(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }

}
