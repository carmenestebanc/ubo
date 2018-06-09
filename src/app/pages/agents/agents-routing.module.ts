// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AgentsAddComponent } from './agents-add/agent-add.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { AgentUpdateComponent } from './agent-update/agent-update.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';

const routes: Routes = [
  { path: '', component: AgentsListComponent, pathMatch: 'full' },
  {
    path: 'list',
    component: AgentsListComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Agents List' }
  },
  {
    path: 'detail/:id',
    component: AgentDetailComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Agent Details' }
  },
  {
    path: 'add',
    component: AgentsAddComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Add Agent' },
  },
  {
    path: 'update/:id',
    component: AgentUpdateComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Update Agent' }
  }
];

export const AgentsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
