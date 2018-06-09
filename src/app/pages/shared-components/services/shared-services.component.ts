import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Logger } from "angular2-logger/core";

import { Agency } from '../../agencias/shared/agency.model';
import { RestService } from '../../../rest/rest-service.component';
import { Agencies } from '../../agencias/shared/agencies.model';

export interface ISelect {
    name: String;
    id?: any;
    data?: any;
}

@Injectable()
export class SharedServicesComponent {  
  agenciesSelect: ISelect[] = [];

  /**
   * Shared services component controller.
   */
  constructor(   
    public logger: Logger,
    public restService: RestService
    ) { }
  
  /**
   * Load Agencies in select list.
   */
  loadAgencies(agenciesSelect: ISelect[] ) {
    this.logger.info("---loadAgencies()---");
    this.restService.setRestUrl("agencies");
    this.restService.loadData('agencies').subscribe(
      (data: Agencies[]) => {
        agenciesSelect = data.map((field: Agencies): ISelect => {
            console.log(field);
          return {
            name:field.name,
            id: field.id,
            data: field
          };
        }
    );
      }
      
    );
  }
}
