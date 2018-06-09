import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { form1 } from './class.form';
import { CategoriasService } from '../shared/categorias.service'; 
import { Categorias } from '../shared/categorias.model'; 

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/switchMap';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'ubl-categorias-update',
  templateUrl: './categorias-update.component.html',
  styleUrls: ['./categorias-update.component.scss']
})
export class CategoriasUpdateComponent implements OnInit {
     
     categorias: Categorias;
  private sub: any;
  private response: any;
  private errMsg = '';
  atributos: any[] = [];
  form1: FormGroup;

  date: DateModel;
  options: DatePickerOptions;

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef
 ) { 
       this.toastr.setRootViewContainerRef(vcr);
     this.form1 = formBuilder.group({
        name: ['', Validators.compose([Validators.required,Validators.maxLength(255),this.notNullValidator])],
        description: ['', Validators.compose([Validators.maxLength(255)])],
        ordering: [null, Validators.compose([Validators.required,
            (c:FormControl):Object=> {
                if(c.value!==null) {
                    return c.value>=0?null:{minlength:{valid:true}};
                }
                return null;
            },
        (c:FormControl):Object=> {
          if(c.value > 9999999999) {
              return {maxlength:{valid:false}};
          }
          return null;
        }
        ])],
        active: [false, ], 
        id: [null, ],
    });
   }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        this.categoriasService
            .getProveedor(id)
            .subscribe(c =>{
                this.categorias = c;
                this.form1.controls['activo'].setValue(c.active);
            });
      });
  }
   onSubmit({ value, valid }: { value: form1, valid: boolean }) {
        this.categoriasService
            .actualizarProveedor(value)
            .subscribe(
                (res) => {
                    this.router.navigate(['/pages/categories/list']).then(() =>{
                        this.toastr.success('Category updated succesfully!');
                    });
                }
            ); 
    }
    notNullValidator(control: FormControl): {[key:string]: any}{
        const checkIt = control.value
        if (checkIt === null || checkIt.trim() == '' ) {
            return {invalid:true};
        }
    }
    
}
