import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { forma } from '../shared/class.form';
import { AgencyService } from '../shared/agency.service';
import { Agency } from '../shared/agency.model';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/switchMap';
import { ValidationsService } from '../../shared-components/form-elements/validations/validations.service';

@Component({
    selector: 'ubl-agency-update',
    templateUrl: './agency-update.component.html',
    styleUrls: ['./agency-update.component.scss'],
    providers:[ValidationsService, AgencyService]
})
export class AgencyUpdateComponent implements OnInit {
    agency;
    sub: any;
    response: any;
    errMsg = '';
    atributos: any[] = [];
    form1: FormGroup;

    constructor(
        public agencyService: AgencyService,
        public  validation: ValidationsService,
        public route: ActivatedRoute,
        public router: Router,
        public formBuilder: FormBuilder,
        public toastr: ToastsManager,
        public vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
        this.form1 = formBuilder.group({
        id: [null,],
        name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator])],
        name_business: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator])],
        phone: ['', Validators.compose([Validators.required,this.validation.cellphoneValidator, Validators.maxLength(60), this.validation.notNullValidator])],
        address: ['', Validators.compose([Validators.required, Validators.maxLength(50), this.validation.notNullValidator])],
        email: ['', Validators.compose([Validators.required, this.validation.emailValidator, Validators.maxLength(40)])],
        name_contact: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.justLettersValidator, this.validation.notNullValidator, this.validation.countWordsValidator])],
        tax_id: ['', Validators.compose([Validators.required, Validators.maxLength(15), this.validation.notNullValidator])],
        status: [false,],
        created_by:['1',]
        });
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            this.agencyService
                .getAgency(id)
                .subscribe(
                (res) => {
                    this.agency = res;
                    if (this.agency.status == "1") {
                        this.agency.status = true;
                    } else {
                        this.agency.status = false;
                    }
                    this.form1.patchValue(this.agency);
                },error=>{             
                    this.toastr.info('Something went wrong.');     
                }
                );
        });
    }
    onSubmit({ value, valid }: { value, valid: boolean }) {
        this.agencyService
            .updateAgency(value)
            .subscribe(
            //result => this.proveedor = result,  
            (res) => {
                this.agency = res;
                this.router.navigate(['/pages/agencies/list']).then(() => {
                    this.toastr.success('Agency updated successfully!');
                })
            },error=>{             
                this.toastr.info('Something went wrong.');     
            }
        );
    }
}

