import { Role, isRole } from '../../../app.component';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserUtilities } from '../shared/user.utilities';
import { User } from '../shared/user.model';
import { Agent } from '../../agents/shared/agent.model';
import { UserBD } from '../shared/userbd.model';
import { Logger } from 'angular2-logger/core';
import { RestService } from '../../../rest/rest-service.component';

@Component({
  selector: 'ubl-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [ RestService ]
})

/**
 * Users list component controller.
 */
export class UsersListComponent implements OnInit {
  user: User;
  users:User[] = [];
  data: User[] = [];
  agents: User[] = [];
  showingAgents: boolean = false;
  errMsg: any;
  userId: string;
  userName: string;
  roleName: string = "";

  /**
   * Class constructor.
   */
 constructor(
    public restService: RestService,
    public toastr: ToastsManager, 
    public vcr: ViewContainerRef,
    public router: Router,
    public logger: Logger,
 ) { 
   this.toastr.setRootViewContainerRef(vcr);
   this.restService.setRestUrl("users"); 
  }

  /**
   * Gets all users from data base.
   */
  getUsers() {  
    this.logger.info("---getUsers()---");  
    this.restService.getList()
    .subscribe(res => {     
      if(!res.length) {
        this.toastr.info('No users found');         
      }else {
        for (let i=0; i<res.length;i++) {
              this.user = new User(res[i].id, res[i].first_name, res[i].last_name, res[i].email,
                                  res[i].enabled, res[i].roles[0].name, res[i].phone, null , 
                                  null , null , false );             
            if (res[i].agent!=null) {
              this.user.is_agent = true; 
              this.agents.push(this.user); 
              this.agents.sort((a, b) => {
                if (a.id > b.id)
                  return -1;
                if (a.id < b.id)
                  return 1;
                return 0;
              });
          }
          this.users.push(this.user);

          this.users.sort((a, b) => {
            if (a.id > b.id)
              return -1;
            if (a.id < b.id)
              return 1;
            return 0;
          });

          this.data = this.users;

          this.data.sort((a, b) => {
            if (a.id > b.id)
              return -1;
            if (a.id < b.id)
              return 1;
            return 0;
          });        
      }      
    }
  },error=>{
      this.toastr.info('Something went wrong');     
    });               
  }

  /**
   * Class initialization.
   */
  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Set user to delete data.
   */
  setUser(id: string, name:string) {
    this.userId = id;
    this.userName = name;
  }

  /**
   * Deletes an user from list and updates view.
   */
  delete(id:string, name: string) {
    this.restService.delete(id).subscribe(
      (res) => {
        this.toastr.success('User deleted!');
        this.users.forEach((t, i) => {
            if (t.id === id) { this.users.splice(i, 1); }
        });
      }
    );
  }

  /**
   * Shows users wether they are agents or not.
   */
  showAllUsers() {
    this.data = this.users;
    this.showingAgents = false;
  }

  /**
   * Shows users only if they are agents.
   */
  showOnlyAgents() {   
    if (this.agents.length == 0) {
      this.toastr.error("There are no agents registered.");
      this.data = [];
    }
    else {
      this.data = this.agents;
      this.showingAgents = true;    
    }
  } 
}
