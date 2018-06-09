import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { form } from '../shared/class.form';
import { UserService } from '../shared/user.service'; 
import { User } from '../shared/user.model'; 

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Agent } from '../../agents/shared/agent.model';
import { Agencies } from '../../agencias/shared/agencies.model';
import { AgencyService } from '../../agencias/shared/agency.service';
import { Agency } from '../../agencias/shared/agency.model';
import { AgentService } from '../../agents/shared/agent.service';
import { RoleService } from '../roles/role.service';
import { Roles } from '../roles/roles.model';
import { ValidationsService } from '../../shared-components/form-elements/validations/validations.service';
import { Logger } from 'angular2-logger/core';
import { ErrorsService } from '../../shared-components/error/errors.service';

export interface ISelect  {
    name: String;
    id?: number | string;
    data?: any;
}

@Component({
  selector: 'ubl-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  providers: [UserService, AgencyService, AgentService, 
              RoleService, ValidationsService, ErrorsService]
})
export class UserUpdateComponent implements OnInit {
    agencyId: string = "0";
    agentId: string = "0";
    roles: string[];
    user: User;
    agent: Agent = new Agent();
    sub: any;
    _agencies: ISelect[] = []; 
    _roles: ISelect[] = [];
    formUser: FormGroup;  

    constructor(
        public userService: UserService,
        public agencyService: AgencyService,
        public agentService: AgentService,    
        public roleService: RoleService,  
        public route: ActivatedRoute,
        public errors: ErrorsService,
        public router: Router,
        public  validation: ValidationsService,
        public formBuilder: FormBuilder,
        public toastr: ToastsManager, 
        public vcr: ViewContainerRef,
        public logger: Logger,
    ) { 
        this.toastr.setRootViewContainerRef(vcr);
        this.loadRoles();
        this.loadAgencies();
        this.formUser = formBuilder.group({
        id: [null,],
        first_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
        last_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
        phone: ['', Validators.compose([Validators.required,this.validation.cellphoneValidator, Validators.maxLength(15), this.validation.notNullValidator])],
        email: ['', Validators.compose([Validators.required, this.validation.emailValidator,Validators.maxLength(40)])],
        enabled: [false,],
        is_agent: [false, Validators.required],
        roles: [null, Validators.required],
        agency_id:  [null, Validators.required]
        });
        this.formUser.get('agency_id').disable();
    }

  ngOnInit() {
    this.loadAgencies();   
     this.sub = this.route.params.subscribe(params => {
        const id = params['id'];
        this.userService
            .getUser(id)
            .subscribe(
              (res) => { 
                  this.user = new User(res.id, res.first_name, res.last_name, res.email, 
                                       res.enabled, res.roles[0].id, res.phone, res.password, 
                                       res.password_confirmation, null, null);
                if (res.agent!= null) {
                    this.user.agency_id = res.agent.agency_id;
                    this.agencyId = res.agent.agency_id;
                    this.formUser.get("agency_id").enable();
                    this.user.is_agent = true;
                    this.agentId = res.agent.id;
                }
                else {
                    this.user.agency_id = "No es Agente";
                    this.user.is_agent = false;
                }
                let form = this.user;  
                form = {
                    "id": this.user.id,
                    "first_name": this.user.first_name,
                    "last_name": this.user.last_name,
                    "email": this.user.email,
                    "phone": this.user.phone,
                    "roles": res.roles[0].id,
                    "agency_id":this.user.agency_id, 
                    "enabled": this.user.enabled,
                    "is_agent": this.user.is_agent                  
                  };
                  this.formUser.setValue(form);
              }
            
            );
      });     
    }

   onSubmit({ value, valid }: { value, valid: boolean }) {
        this.user = new User(this.user.id, value.first_name, value.last_name, value.email, 
                             value.enabled, value.roles, value.phone, this.user.password, 
                             this.user.password_confirmation, value.agency_id, null )
        this.agent.user_id = this.user.id;
        this.agent.agency_id = value.agency_id;
        this.agent.id = this.agentId;
        this.agentService.updateAgent( this.agent).subscribe( 
            (res) => {
            },error=>{             
                this.toastr.info('Something went wrong with agent update.');     
            }
        );        
        this.userService
        .updateUser(this.user)
        .subscribe( 
            (res) => {              
                this.router.navigate(['/pages/users/list']).then(() => {
                this.toastr.success('User updated successfully!');
                });
            },error=>{   
                var emailError = this.errors.emailTakenError(error);        
                if (emailError == 0) {                   
                    this.toastr.info('Something went wrong.');              
                }
            }
        );          
    }

    /**
     * Carga las agencias en el SelectList.
     */
    loadAgencies() {
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
   * Loads Roles into a SelectList.
   */
    loadRoles() {
        this.logger.info("---loadRoles()---");
        this.roleService.loadData('roles').subscribe(        
        (data: Roles[]) => {
            this._roles = data.map((field: Roles): ISelect => {
            return {
                name:field.name,
                id: field.id,
                data: field
            };
            });
        }
        );
  }
}

