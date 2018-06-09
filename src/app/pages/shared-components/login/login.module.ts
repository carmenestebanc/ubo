import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';

export const routes = [
  { path: 'recover', component: RecoverComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent, RecoverComponent]
})

export class LoginModule { }
