import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { HttpModule } from '@angular/http';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents.component';
import { AgentService } from './shared/agent.service';
import { AgentsAddComponent } from './agents-add/agent-add.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { AgentUpdateComponent } from './agent-update/agent-update.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    AgentsRoutingModule,
    PipesModule,
    DirectivesModule,
    HttpModule,
    ReactiveFormsModule 
  ],
 
  declarations: [
    AgentsComponent,
    AgentsAddComponent, 
    AgentsListComponent, 
    AgentUpdateComponent,
    AgentDetailComponent
  ],
 
  
  providers: [AgentService],
 

})
export class AgentsModule { }
