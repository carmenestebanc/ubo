import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { forma } from '../shared/class.form';
import { AgencyService } from '../shared/agency.service'; 
import { Agency } from '../shared/agency.model'; 
import { ValidationsService } from '../../shared-components/form-elements/validations/validations.service';



@Component({
  selector: 'ubl-agencies-add',
  templateUrl: './agencies-add.component.html',
  styleUrls: ['./agencies-add.component.scss'],
  providers:[ValidationsService, AgencyService]
})
export class AgenciesAddComponent implements OnInit {
    

    form1: FormGroup;
    agency1: Agency;
    errMsg: any;
    errors: Array<Object> = [];
    slideOneForm: FormGroup;

  constructor(
        public router:Router,
        public formBuilder: FormBuilder,
        public agencyService: AgencyService,
        public toastr: ToastsManager,
        public  validation: ValidationsService,
        public vcr: ViewContainerRef
) {}

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.vcr);
    this.form1 = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator])],
        name_business: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.notNullValidator])],
        phone: ['', Validators.compose([Validators.required, this.validation.cellphoneValidator, Validators.maxLength(60), this.validation.notNullValidator])],
        address: ['', Validators.compose([Validators.required, Validators.maxLength(50), this.validation.notNullValidator])],
        email: ['', Validators.compose([Validators.required, this.validation.emailValidator, Validators.maxLength(40)])],
        name_contact: ['', Validators.compose([Validators.required, Validators.maxLength(60), this.validation.justLettersValidator, this.validation.notNullValidator, this.validation.countWordsValidator])],
        tax_id: ['', Validators.compose([Validators.required, Validators.maxLength(15), this.validation.notNullValidator])],
        status: [false,],
        created_by:['1',]
    });

  }
  onSubmit({ value, valid }: { value: forma, valid: boolean }) {
        if(!this.form1.valid){
            this.toastr.error('There are empty fields!', 'Error!');
        }else{ 
            value.created_by='1';           
            this.agencyService
            .createAgency(value)
            .subscribe(
                (res) => {
                    this.agency1 = res; 
                    this.router.navigate(['/pages/agencies/list']).then(() => {
                        this.toastr.success('Agency create successfully!');
                    });
                },error=>{             
                    this.toastr.info('Something went wrong.');     
                }
            );
        }
    }    
}
