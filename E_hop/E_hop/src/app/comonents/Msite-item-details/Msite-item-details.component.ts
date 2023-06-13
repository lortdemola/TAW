import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'Msite-item-details',
  templateUrl: './Msite-item-details.component.html',
  styleUrls: ['./Msite-item-details.component.css']
})
export class MsiteItemDetailsComponent  implements OnInit {

  public image: string = '';
  public title: string = '';
  public description: string = '';
  public price: number = 0;
  public seller: string = '';
  public itemID: string = '';


  constructor(private service: DataService,public authService: AuthService, private route: ActivatedRoute,private router: Router) {
  }


  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
        this.itemID = id;
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.title = res['title'];
      this.description = res['description'];
      this.price = res['price'];
      this.seller = res['seller'];
    });

  }

  delProduct() {
    if(this.authService.isLoggedIn()) {
      console.log(this.itemID);
      this.service.Delete(this.itemID).subscribe((result) => {
        return result;
      });
     this.router.navigate(['/'])
    }
  }

}

