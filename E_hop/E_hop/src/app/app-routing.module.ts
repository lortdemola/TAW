import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MsiteItemDetailsComponent} from "./comonents/Msite-item-details/Msite-item-details.component";
import {MsiteHomeComponent} from "./comonents/Msite-home/Msite-home.component";
import {HomeComponent} from "./comonents/home/home.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AddProductComponent} from "./comonents/product-add/product-add.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {path: '',
    component: MsiteHomeComponent,
  },
  {
    path: 'blog/detail/:id',
    component: MsiteItemDetailsComponent
  },
  {
    path: 'addPost',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'blog/detail/edit/:id',
    component: EditProductComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
