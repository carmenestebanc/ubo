// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

const routes: Routes = [
  { path: '', component: ClientsListComponent, pathMatch: 'full' },
  {
    path: 'list',
    component: ClientsListComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Clients List' }
  },
  {
    path: 'detail/:id',
    component: ClientDetailComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Client Details' }
  },
  {
    path: 'add',
    component: ClientsAddComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Client' },


  },
  {
    path: 'update/:id',
    component: ClientUpdateComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Update Client' }
  }

];

export const ClientsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
