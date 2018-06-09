import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

import 'rxjs/add/operator/switchMap';
import { Agent } from '../../agents/shared/agent.model';
import { AgentService } from '../../agents/shared/agent.service';
import { Agency } from '../../agencias/shared/agency.model';
import { AgencyService } from '../../agencias/shared/agency.service';
import { RoleService } from '../roles/role.service';

@Component({
  selector: 'ubl-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [AgentService, AgencyService, UserService, RoleService]
})
export class UserDetailComponent implements OnInit {
  user: User;
  paramsAgent: URLSearchParams = new URLSearchParams();
  sub: any;
  response: any;
  data:any [] = [];
  agencyId: string;
  userId: string;
  userRoles: string[] = [];
  agencyName: String = "Is not an Agent";
  roleName: string = "";

  public errMsg = '';
  atributos: any[] = [];

  constructor(
    public usersService: UserService,
    public agentService: AgentService,
    public agencyService: AgencyService,
    public roleService: RoleService,
    public toastr: ToastsManager,
    public route: ActivatedRoute,
    public vcr: ViewContainerRef,
    public router: Router
  ) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        const user = params['id'];
        this.userId = user;
        this.paramsAgent.set("user_id", user);
        this.usersService
        .getUser(user)
        .subscribe(c => {
          this.user = c;
          this.roleName = c.roles[0].name;
        },error=>{
          this.toastr.info('Something went wrong'); 
        }
      );  
      },error=>{
        this.toastr.info('Something went wrong'); 
      }
    );        
      this.getAgent();      
  }

  /**
   * Gets the agent with the given user_id.
   */
  public getAgent(){
    this.agentService.loadDataParams('agents', this.paramsAgent).subscribe(
      response=> {
        if(!response['data'].length) {
        this.toastr.info('No results found');         
        }
        this.data = response['data'];
        if (this.data.length>1){
          this.agencyName = "Is not an Agent.";
        }
        this.getAgency();          
      },error=>{
        this.toastr.info('No results found'); 
      }
    );
  }

  /**
   * Gets the name of the agency. 
   * first, gets the id of the agency, then
   * searches for the name.
   * The value is setted into a global variable.
   */
  public getAgency() {
    for (let i=0; i<this.data.length;i++){
      if (this.data[i].user_id==this.userId){
        this.agencyId = this.data[i].agency_id;     
        this.agencyService
        .getAgency(this.agencyId)
        .subscribe(c => {
            this.agencyName = c.name; 
        },error=>{
          this.toastr.info('No results found'); 
        }
      );        
      }
    }
  }
}