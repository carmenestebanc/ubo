import { Component, OnInit } from '@angular/core';
// import {  FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguiDatetimePickerModule, NguiDatetime } from '@ngui/datetime-picker';

import { forma } from '../shared/class.form';
import { ClientService } from '../shared/client.service'; 
import { Client } from '../shared/client.model'; 
import { ValidationsService } from '../../shared-components/form-elements/validations/validations.service';
import { ErrorsService } from '../../shared-components/error/errors.service';



@Component({
  selector: 'ubl-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.scss'],
  providers:[ValidationsService, ClientService, ErrorsService]
})
export class ClientsAddComponent implements OnInit {
    

form1: FormGroup;
client1: Client;
birth_date: string;

errMsg: any;
slideOneForm: FormGroup;

  constructor(
        public router:Router,
        public formBuilder: FormBuilder,
        public clientService: ClientService,
        public errors: ErrorsService,
        public  validation: ValidationsService,
        public toastr: ToastsManager,
        public vcr: ViewContainerRef
) {}

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.vcr);
    this.form1 = this.formBuilder.group({
        first_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
        last_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
        birth_date:['',  Validators.compose([Validators.required, this.validation.isValidDate])],
        phone: ['', Validators.compose([Validators.required,this.validation.cellphoneValidator, Validators.maxLength(15), this.validation.notNullValidator])],        
        email: ['', Validators.compose([Validators.required, this.validation.emailValidator,Validators.maxLength(40)])],
        country: ['', Validators.compose([Validators.maxLength(60), this.validation.justLettersValidator])],
        state: ['', Validators.compose([Validators.maxLength(60), this.validation.justLettersValidator])],
        city: ['', Validators.compose([Validators.maxLength(60), this.validation.justLettersValidator])],
        address: ['', Validators.compose([Validators.maxLength(60)])],
    });

  }
  onSubmit({ value, valid }: { value: forma, valid: boolean }) {
        if(!this.form1.valid){
            this.toastr.error('There are empty fields!', 'Error!');
        }else{            
            this.clientService
            .createClient(value)
            .subscribe(
                (res) => {
                    this.client1 = res; 
                    this.router.navigate(['/pages/clients/list']).then(() => {
                        this.toastr.success('Client created successfully!');
                    },error=>{   
                        var emailError = this.errors.emailTakenError(error);        
                        if (emailError == 0) {                   
                            this.toastr.info('Something went wrong.');              
                        }
                    }
                );
                }
            );
        }
    }   
}
