import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './user-listing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: UserListingComponent}
]

@NgModule({
  declarations: [UserListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserListingModule { }
