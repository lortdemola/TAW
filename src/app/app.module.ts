import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './comonents/blog/blog.component';
import { BlogItemComponent } from './comonents/blog-item/blog-item.component';
import { BlogItemImageComponent } from './comonents/blog-item-image/blog-item-image.component';
import { BlogItemTextComponent } from './comonents/blog-item-text/blog-item-text.component';
import { BlogItemDetailsComponent } from './comonents/blog-item-details/blog-item-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DataService} from "./services/data.service";
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { BlogHomeComponent } from './comonents/blog-home/blog-home.component';
import {FilterTextPipe} from "./pipes/filter-text.pipe";
import { TextFormatDirective } from './directives/text-format.directive';
import { HomeComponent } from './comonents/home/home.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from
    './services/auth/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AddPostComponent} from './comonents/post-add/post-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddPostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
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
