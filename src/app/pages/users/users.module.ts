import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { HttpModule } from '@angular/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserService } from './shared/user.service';
import { UsersAddComponent } from './users-add/user-add.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    UsersRoutingModule,
    PipesModule,
    DirectivesModule,
    HttpModule,
    ReactiveFormsModule 
  ],
 
  declarations: [
    UsersComponent,
    UsersAddComponent, 
    UsersListComponent, 
    UserUpdateComponent,
    ProfileComponent,
    UserDetailComponent
  ], 
  
  providers: [UserService],
  
})
export class UsersModule { }
