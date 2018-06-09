import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { formAgent } from '../shared/class.form';
import { AgentService } from '../shared/agent.service';
import { Agent } from '../shared/agent.model';
import { UserService } from '../../users/shared/user.service';
import { AgencyService } from '../../agencias/shared/agency.service'; 
import { Agencies } from '../../agencias/shared/agencies.model'; 
import { Agency } from '../../agencias/shared/agency.model'; 
import { User } from '../../users/shared/user.model'; 
import { Users } from '../../users/shared/users.model'; 

import { Logger } from "angular2-logger/core";

export interface ISelect  {
    name: String;
    id?: number | string;
    data?: any;
}

@Component({
  selector: 'ubl-users-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.scss'],
  providers: [AgencyService, UserService, AgentService]
})

export class AgentsAddComponent implements OnInit {    

    form1: FormGroup;
    agent1: Agent;
    agencies: Agency[] = []; 
    _agencies: ISelect[] = [];
    users: User[] = []; 
    _users: ISelect[] = [];
    errMsg: any;
    errors: Array<Object> = [];
    slideOneForm: FormGroup;

  constructor(
        public router:Router,
        public formBuilder: FormBuilder,
        public userService: UserService,
        public agencyService: AgencyService,
        public agentService: AgentService,
        public logger: Logger,
        public toastr: ToastsManager,
        public vcr: ViewContainerRef       
) {}

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.vcr);
    this.form1 = this.formBuilder.group({       
        agency_id:  [null, Validators.required],
        user_id:  [null, Validators.required]
    });
  }

  /**
   * When user press add button.
   */
  onSubmit({ value, valid }: { value: formAgent, valid: boolean }) {
    if(!this.form1.valid){
        this.toastr.error('No ha llenado todos los campos!', 'Error!');
    }else{            
        this.agentService
        .createAgent(value)
        .subscribe(
            (res) => {
                this.agent1 = res; 
                this.router.navigate(['/pages/agents/list']).then(() => {
                    this.toastr.success('Agent created successfully!');
                });
            }
        );
    }
}

  /**
   *Loads Agencies into a SelectList.
   */
    _loadAgencies() {
        this.logger.info("---loadAgencies()---");
        this.agencyService.loadData('agencies').subscribe(
        (data: Agencies[]) => {
            this._agencies = data.map((field: Agencies): ISelect => {
            return {
                name:field.name,
                id: field.id,
                data: field
            };
            });
        }
        );
    }

  /**
   *Loads Users into a SelectList.
   */
  _loadUsers() {
    this.logger.info("---loadUsers()---");
    this.userService.loadData('users').subscribe(
    (data: Users[]) => {
        this._users = data.map((field: Users): ISelect => {
        return {
            name:field.first_name,
            id: field.id,
            data: field
        };
        });
    }
    );
}

    emailValidator(control: FormControl): {[key: string]: any} {
        const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return {invalidEmail: true};
        }
    }
    notNullValidator(control: FormControl): {[key:string]: any}{
        const checkIt = control.value
        if (checkIt===null || checkIt.trim() == '' ) {
            return {invalid:true};
        }
    }
}
