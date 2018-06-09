import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { form } from '../shared/class.form';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model'; 

import { AgentService } from '../../agents/shared/agent.service';
import { Agent } from '../../agents/shared/agent.model';
import { AgencyService } from '../../agencias/shared/agency.service'; 
import { Agencies } from '../../agencias/shared/agencies.model'; 
import { Agency } from '../../agencias/shared/agency.model'; 
import { Users } from '../shared/users.model';
import { Roles } from '../roles/roles.model';
import { RoleService } from '../roles/role.service';
import { ValidationsService } from '../../shared-components/form-elements/validations/validations.service';

import { Logger } from 'angular2-logger/core';
import { ErrorsService } from '../../shared-components/error/errors.service';

export interface ISelect  {
    name: String;
    id?: number | string;
    data?: any;
}

@Component({
  selector: 'ubl-users-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  providers: [UserService, AgentService, AgencyService, 
              RoleService, ValidationsService, ErrorsService]
})

export class UsersAddComponent implements OnInit {    
    form1: FormGroup;
    user: User;
    roles: string[];
    _agencies: ISelect[] = [];
    _roles: ISelect[] = [];
    email: string;   
    is_agent: boolean = false;   
    _data:any [] = [];
    algo: string;
   

  constructor(
        public router:Router,
        public formBuilder: FormBuilder,
        public validation: ValidationsService,
        public errors: ErrorsService,
        public userService: UserService,
        public roleService: RoleService,        
        public agencyService: AgencyService,
        public agentService: AgentService,
        public toastr: ToastsManager,
        public vcr: ViewContainerRef,
        public logger: Logger,       
) {
}

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.vcr);
    this.loadAgencies();
    this.loadRoles();
    this.is_agent = false;
    this.form1 = this.formBuilder.group({
        first_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
        last_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
        phone: ['', Validators.compose([Validators.required,this.validation.cellphoneValidator, Validators.maxLength(15), this.validation.notNullValidator])],
        email: ['', Validators.compose([Validators.required, this.validation.emailValidator,Validators.maxLength(40)])],
        password:  ['', Validators.compose([Validators.required,  Validators.minLength(6),  Validators.maxLength(16)])],
        password_confirmation:  ['', Validators.compose([Validators.required,  Validators.minLength(6),  Validators.maxLength(16)])],       
        enabled: [false,],
        is_agent: [false, Validators.required],
        roles: [null, Validators.required],
        agency_id:  [null, Validators.required]
    });
    
    this.form1.get('agency_id').disable();    
  }

  /**
   * When user press submit button.
   */
  onSubmit({ value, valid }: { value: form, valid: boolean }) { 
    if(!value.password || value.password === '') {
        delete value.password;
        delete value.password_confirmation;
    }
    if( (value.password || '') !== (value.password_confirmation || '')) {
        this.toastr.info('Please check passwords match');
        return;
    }
    if(!this.form1.valid){
        this.toastr.error('Empty fields!', 'Error!');
    }else{
            this.user = new User(null, value.first_name, value.last_name, value.email, 
                                 value.enabled, value.roles, value.phone, value.password, 
                                 value.password_confirmation, value.agency_id);   
        this.userService
        .createUser(this.user)
        .subscribe(
            (res) => {                
                this.router.navigate(['/pages/users/list']).then(() => {
                    this.toastr.success('User created successfully!');
                });                    
            },error=>{   
                var emailError = this.errors.emailTakenError(error);        
                if (emailError == 0) {                   
                    this.toastr.info('Something went wrong.');              
                }
            }
        );          
        } 
    }

    /**
   * Loads Agencies into a SelectList.
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
    public loadRoles() {
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

  /**
   * Changes the agent enabled.
   */
    public changeIsAgent() {
        this.logger.info("---changeIsAgent()---");
        if (this.is_agent==true) {
            this.is_agent=false;
            this.form1.get('agency_id').disable();
        }
        else {
            this.is_agent=true;
            this.form1.get('agency_id').enable();
        }
    }

    /**
     * Gets the value of is_agent.
     */
    public isAgent() : boolean {
        return this.is_agent;
    }

    public getAgencyId() : string {
        let formAgent = ['agency_id'];
        let value;
        for (let form of formAgent){
            if (this.form1.value[form].length) {
              if (form == 'agency_id') {
                value = this.form1.value[form];
                return value;
              } 
            }
        }
    }
}
