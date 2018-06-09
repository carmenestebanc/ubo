import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { formAgent } from '../shared/class.form';
import { AgentService } from '../shared/agent.service'; 
import { Agent } from '../shared/agent.model'; 

import { AgencyService } from '../../agencias/shared/agency.service'; 
import { Agency } from '../../agencias/shared/agency.model'; 

import { User } from '../../users/shared/user.model'; 
import { Users } from '../../users/shared/users.model'; 
import { UserService } from '../../users/shared/user.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/switchMap';

export interface ISelect  {
    name: String;
    id?: number | string;
    data?: any;
}

@Component({
  selector: 'ubl-agent-update',
  templateUrl: './agent-update.component.html',
  styleUrls: ['./agent-update.component.scss'],
  providers: [AgencyService, UserService, AgentService]
})

export class AgentUpdateComponent implements OnInit {
  agent;
  private sub: any;
  private response: any;
  private errMsg = '';
  atributos: any[] = [];
  form1: FormGroup;
  agencies: Agency[] = []; 
  _agencies: ISelect[] = [];
  users: User[] = []; 
  _users: ISelect[] = [];

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private agencyService: AgencyService,
    private agentService: AgentService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef 
  ) { 
      this.toastr.setRootViewContainerRef(vcr);
      this.form1 = formBuilder.group({
        id: [null,],
        name: ['', Validators.compose([Validators.required,Validators.maxLength(255), this.notNullValidator])],
        lastname: ['', Validators.compose([Validators.required,Validators.maxLength(255), this.notNullValidator])],
        email: ['', Validators.compose([Validators.required, this.emailValidator,Validators.maxLength(255)])],
 
      });
  }

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.vcr);
    this.form1 = this.formBuilder.group({       
        agency_id:  [null, Validators.required],
        user_id:  [null, Validators.required]
    });
       
  }

  /**
   * When user press update button.
   */
   onSubmit({ value, valid }: { value, valid: boolean }) {    
    if(!this.form1.valid){
        this.toastr.error('No ha llenado todos los campos!', 'Error!');
    }else {
        this.agentService
            .updateAgent(value)
            .subscribe(
                (res) => {                                        
                    this.agent = res; 
                    this.router.navigate(['/pages/agents/list']).then(() => {
                    this.toastr.success('Agent updated successfully!');
                    })
                }
            );  
        }
    }
    emailValidator(control: FormControl): {[key: string]: any} {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
        if (control.value && !emailRegexp.test(control.value)) {
            return {invalidEmail: true};
        }
    }
    notNullValidator(control: FormControl): {[key:string]: any}{
        const checkIt = control.value
        if (checkIt.trim() == '' ) {
            return {invalid:true};
        }
    }
}

