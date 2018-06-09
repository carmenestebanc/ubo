import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoriasComponent } from './categorias.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { CategoriasAddComponent } from './categorias-add/categorias-add.component';
import { CategoriasUpdateComponent } from './categorias-update/categorias-update.component';
import { CategoriasDetailComponent } from './categorias-detail/categorias-detail.component';

const routes: Routes = [
  { path: '', component: CategoriasListComponent, pathMatch: 'full' },
  { 
    path: 'list',
    component: CategoriasListComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Categories List' }
  },
  { 
    path: 'add',
    component: CategoriasAddComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Add Category' } ,
  },
  {
    path: 'detail/:id',
    component: CategoriasDetailComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Category Details' }
  },
  {
    path: 'update/:id',
    component: CategoriasUpdateComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Update Category' }
  },
];
export const CategoriasRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
