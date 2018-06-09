import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NguiDatetimePickerModule, NguiDatetime } from '@ngui/datetime-picker';
import { DataTableModule } from 'angular2-datatable';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { HttpModule } from '@angular/http';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './client.component';
import { ClientService } from './shared/client.service';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

NguiDatetime.firstDayOfWeek = 0;
NguiDatetime.weekends = [null, null];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ClientsRoutingModule,
    PipesModule,
    DirectivesModule,
    HttpModule,
    ReactiveFormsModule,
    NguiDatetimePickerModule 
  ],
 
  declarations: [
    ClientComponent,
    ClientsAddComponent, 
    ClientsListComponent, 
    ClientUpdateComponent,
    ClientDetailComponent
  ],
 
  
  providers: [ClientService],
 

})
export class ClientModule { }
