import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsiteComponent} from "./comonents/mainsite/Msite.component";
import { MsiteItemComponent } from './comonents/Msite-item/Msite-item.component';
import { MsiteItemImageComponent } from './comonents/Msite-item-image/Msite-item-image.component';
import { MsiteItemTextComponent } from './comonents/Msite-item-text/Msite-item-text.component';
import { MsiteItemDetailsComponent } from './comonents/Msite-item-details/Msite-item-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DataService} from "./services/data.service";
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { MsiteHomeComponent } from './comonents/Msite-home/Msite-home.component';
import {FilterTextPipe} from "./pipes/filter-text.pipe";
import { TextFormatDirective } from './directives/text-format.directive';
import { HomeComponent } from './comonents/home/home.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from
    './services/auth/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AddProductComponent} from './comonents/product-add/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SpinPipe } from './pipes/spin.pipe';
import { ShakeOnHoverDirective } from './shared/shake-on-hover.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ButtonHoverAnimationDirective } from './directives/button-hover-animation.directive';
import { PriceSortPipePipe } from './pipes/price-sort-pipe.pipe';
import { MyItemsFilterPipe } from './pipes/my-items-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MsiteComponent,
    MsiteItemComponent,
    MsiteItemTextComponent,
    MsiteItemImageComponent,
    MsiteItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    MsiteHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddProductComponent,
    CustomDropdownComponent,
    FooterComponent,
    EditProductComponent,
    SpinPipe,
    ShakeOnHoverDirective,
    CurrencyPipe,
    ButtonHoverAnimationDirective,
    PriceSortPipePipe,
    MyItemsFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
