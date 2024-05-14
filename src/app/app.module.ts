import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { LibraryComponent } from './components/library/library.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavoriteBooksComponent } from './components/favorite-books/favorite-books.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminProfilesComponent } from './components/admin-profiles/admin-profiles.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SearchPipe } from './pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PdfsComponent } from './components/pdfs/pdfs.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllBooksComponent,
    ViewBookComponent,
    LibraryComponent,
    PageNotFoundComponent,
    FavoriteBooksComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminProfilesComponent,
    SearchPipe,
    PdfsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    NgxPaginationModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
