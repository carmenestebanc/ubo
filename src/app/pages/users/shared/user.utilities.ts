import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';


import { Agent } from '../../agents/shared/agent.model';
import { AgentService } from '../../agents/shared/agent.service';
import { Agency } from '../../agencias/shared/agency.model';
import { AgencyService } from '../../agencias/shared/agency.service';


@Injectable()
export class UserUtilities {

    user: User;
    private _http:Http;
    //paramsAgent: URLSearchParams = new URLSearchParams();
    private sub: any;
    private response: any;
    private data:any [] = [];
    agencyId: string;
    userId: string;
    agencyName: String = "Is not an Agent";

  constructor(
    private usersService: UserService,
    private agentService: AgentService,
    private logger: Logger,
    public toastr: ToastsManager,
    private agencyService: AgencyService
  ) {   }
 
 
 /**
   * Gets the agent with the given user_id.
   */
  public getAgent(paramsAgent: URLSearchParams): string {
    this.agentService.loadDataParams('agents', paramsAgent).subscribe(
      response=> {
        if(!response['data'].length) {
            this.toastr.info('No results found'); 
            return "Error";        
        }
        this.data = response['data'];
        if (this.data.length>1){
          this.agencyName = "Is not an Agent.";
          return this.agencyName;
        }
        this.agencyName = this.getAgency();
        return this.agencyName;          
      },error=>{
        this.toastr.info('No results found');
        return "Error"; 
      }
    );
    return;
  }

  /**
   * Gets the name of the agency. 
   * first, gets the id of the agency, then
   * searches for the name.
   * The value is setted into a global variable.
   */
  public getAgency() : string {
    for (let i=0; i<this.data.length;i++){
      if (this.data[i].user_id==this.userId){
        this.agencyId = this.data[i].agency_id;     
        this.agencyService
        .getAgency(this.agencyId)
        .subscribe(c => {
            this.agencyName = c.name; 
            return this.agencyName;
        });        
      }
    }
    return;
  }  
}