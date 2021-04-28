import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: "", loadChildren: () => import("../users/user-listing/user-listing.module").then(
        (m) => m.UserListingModule
      ) },
      { path: "details/:id", loadChildren: () => import("../users/user-details/user-details.module").then(
        (m) => m.UserDetailsModule
      ) },
    ]
  }
]



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
