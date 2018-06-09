// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AgenciesAddComponent } from './agencias-add/agencies-add.component';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgencyUpdateComponent } from './agency-update/agency-update.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import  {AgenciesListFilterComponent } from "./agencies-list/agencies-list-filter.component";

const routes: Routes = [
  { path: '', component: AgenciesListComponent, pathMatch: 'full' },
  {
    path: 'list',
    component: AgenciesListComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Agencies List' }
  },
  {
    path: 'detail/:id',
    component: AgencyDetailComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Agency Details' }
  },
  {
    path: 'add',
    component: AgenciesAddComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Agency' },


  },
  {
    path: 'update/:id',
    component: AgencyUpdateComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Update Agency' }
  }

];

export const AgenciesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
