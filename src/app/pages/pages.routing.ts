import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './shared-components/blank/blank.component';
import { SearchComponent } from './shared-components/search/search.component';
import { CategoryComponent } from './com.acorde.portal/category/category.component';
import {AgencyComponent } from './agencias/agency.component';
import {ClientComponent } from './clientes/client.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'agencies', pathMatch: 'full' },
      //{ path: 'categories', loadChildren: 'app/pages/categorias/categorias.module#CategoriasModule', data: { breadcrumb: 'Categories' } },
      { path: 'agents', loadChildren: 'app/pages/agents/agents.module#AgentsModule', data: { breadcrumb: 'Agents' } },
      { path: 'agencies', loadChildren: 'app/pages/agencias/agency.module#AgencyModule', data: { breadcrumb: 'Agencies' } },
      { path: 'clients', loadChildren: 'app/pages/clientes/client.module#ClientModule', data: { breadcrumb: 'Clients' } },
      { path: 'users', loadChildren: 'app/pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
      { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
      { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },

      //TODO: Inject model
      // { path: 'categories', component: CategoryComponent, data: { breadcrumb: 'Categorias' } },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
