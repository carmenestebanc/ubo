import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { forma } from '../shared/class.form';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/switchMap';
import { ValidationsService } from '../../shared-components/form-elements/validations/validations.service';
import { Logger } from 'angular2-logger/core';
import { ErrorsService } from '../../shared-components/error/errors.service';

@Component({
    selector: 'ubl-client-update',
    templateUrl: './client-update.component.html',
    styleUrls: ['./client-update.component.scss'],
    providers:[ValidationsService, ClientService, ErrorsService]
})
export class ClientUpdateComponent implements OnInit {
    client: Client;
    sub: any;
    response: any;
    errMsg = '';
    form1: FormGroup;

    constructor(
        public clientService: ClientService,
        public route: ActivatedRoute,
        public router: Router,
        public logger: Logger,
        public errors: ErrorsService,
        public  validation: ValidationsService,
        public formBuilder: FormBuilder,
        public toastr: ToastsManager,
        public vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
        this.form1 = formBuilder.group({
            id: [null,],
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

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            this.clientService
                .getClient(id)
                .subscribe(
                (res) => {
                    this.client = res;
                    let form = this.client;
                    form = {
                        "id": this.client.id,
                        "first_name": this.client.first_name,
                        "last_name": this.client.last_name,
                        "birth_date": this.client.birth_date,
                        "email": this.client.email,
                        "phone": this.client.phone,
                        "state": this.client.state,
                        "country": this.client.country,
                        "city": this.client.city,
                        "address": this.client.address                        
                      };
                    this.form1.setValue(form);
                },error=>{             
                    this.toastr.info('Something went wrong.');     
                }
                );
        });
    }
    onSubmit({ value, valid }: { value, valid: boolean }) {
        this.clientService
            .updateClient(value)
            .subscribe(
            (res) => {
                this.client = res;
                this.router.navigate(['/pages/clients/list']).then(() => {
                    this.toastr.success('Client updated successfully!');
                })
            },error=>{   
                var emailError = this.errors.emailTakenError(error);        
                if (emailError == 0) {                   
                    this.toastr.info('Something went wrong.');              
                }
            }
        );
    }    
}

