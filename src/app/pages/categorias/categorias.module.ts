import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { HttpModule } from '@angular/http';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { CategoriasAddComponent } from './categorias-add/categorias-add.component';
import { CategoriasService } from './shared/categorias.service';
import { CategoriasDetailComponent } from './categorias-detail/categorias-detail.component';
import { CategoriasUpdateComponent } from './categorias-update/categorias-update.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoriasRoutingModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    HttpModule,
    ReactiveFormsModule 
  ],
 
  declarations: [CategoriasComponent, CategoriasListComponent, CategoriasAddComponent, CategoriasDetailComponent, CategoriasUpdateComponent],
 
  
  providers: [CategoriasService],
 

})
export class CategoriasModule { }