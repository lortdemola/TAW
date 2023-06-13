import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public credentials = {
    id: '',
    image: '',
    title: '',
    description: '',
    price: '',
    seller:this.authService.currentUser.name,


  };// Object to hold the form data
  productId: string = ''; // Property to store the product ID

  constructor(private authService: AuthService,private productService: DataService, private route: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
    // Get the product ID from the route parameters

    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
        this.productId = id;
      });

    this.productService.getById(id).subscribe((res: any) => {
      this.credentials = res;
    });

  }

  updateProduct(): void {
    this.productService.Update(this.productId,this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);
  }
}
