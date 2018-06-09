// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UsersAddComponent } from './users-add/user-add.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UsersListComponent, pathMatch: 'full' },
  {
    path: 'list',
    component: UsersListComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Users List' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Profile' }
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'User Details' }
  },
  {
    path: 'add',
    component: UsersAddComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Add User' },
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Update User' }
  }

];

export const UsersRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
