import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

import { LibraryComponent } from './components/library/library.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavoriteBooksComponent } from './components/favorite-books/favorite-books.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminProfilesComponent } from './components/admin-profiles/admin-profiles.component';
import { PdfsComponent } from './components/pdfs/pdfs.component';

const routes: Routes = [
  {
    path:'',component:AllBooksComponent
  },
  {
    path:'view/:id',component:ViewBookComponent
  },
  {
    path:'admin/dashboard',component:AdminDashboardComponent
  },
  {
    path:'admin/login',component:AdminLoginComponent

  },
  {
    path:'admin/register',component:AdminRegisterComponent

  },
  {
    path:'admin/profiles',component:AdminProfilesComponent

  },  
  {
    path:'admin/add',component:AdminAddComponent

  },
  {
    path:'admin/edit',component:AdminEditComponent

  },
  {
    path:'user/login',component:UserLoginComponent
  },
  {
    path:'user/register',component:UserRegisterComponent
  },
  {
    path:'user/library',component:LibraryComponent
  },
  {
    path:'user/favorites',component:FavoriteBooksComponent
  },
  {
    path:'user/pdf',component:PdfsComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
