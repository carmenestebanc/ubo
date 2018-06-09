import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { HttpModule } from '@angular/http';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgencyComponent } from './agency.component';
import { AgencyService } from './shared/agency.service';
import { AgenciesAddComponent } from './agencias-add/agencies-add.component';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgencyUpdateComponent } from './agency-update/agency-update.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import  {AgenciesListFilterComponent } from "../agencias/agencies-list/agencies-list-filter.component";

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    AgenciesRoutingModule,
    PipesModule,
    DirectivesModule,
    HttpModule,
    ReactiveFormsModule
  ],
 
  declarations: [
    AgencyComponent,
    AgenciesAddComponent, 
    AgenciesListComponent, 
    AgencyUpdateComponent,
    AgencyDetailComponent,
    AgenciesListFilterComponent    
  ],
 
  
  providers: [AgencyService],
 

})
export class AgencyModule { }
