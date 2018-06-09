import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { form1 } from './class.form';
import { CategoriasService } from '../shared/categorias.service';
import { Categorias } from '../shared/categorias.model';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
    selector: 'ubl-categorias-add',
    templateUrl: './categorias-add.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CategoriasAddComponent implements OnInit {
    form1: FormGroup;
    proveedor1: Categorias;

    nombreRazonSocial: string;
    descripcionRazonSocial: string;
    rifRazonSocial: string;
    telefono1: string;
    telefono2: string;
    direccion: string;
    fechaValidez: string;
    activo: boolean;
    form: any;
    datas: any;
    proveedor: string;
    errMsg: any;

    errors: Array<Object> = [];
    slideOneForm: FormGroup;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private categoriasService: CategoriasService,
        public toastr: ToastsManager,
        vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);

        this.form1 = formBuilder.group({
            name: ['', Validators.compose([Validators.required,Validators.maxLength(255),this.notNullValidator])],
            description: ['', Validators.compose([Validators.maxLength(255)])],
            ordering: [0, Validators.compose([Validators.required,
                (c:FormControl):Object=> {
                    if(c.value!==null) {
                        return c.value>=0?null:{minlength:{valid:false}};
                    }
                    return null;
                },
        (c:FormControl):Object=> {
          if(c.value > 9999999999) {
              return {maxlength:{valid:false}};
          }
          return null;
        },(c:FormControl):Object=> {
            if((c.value - Math.trunc(c.value)) > 0) {
                return {decimalnumber:{valid:false}};
            }
            return null;
        },
            ])],
            active: [false,]
        });
    }

    ngOnInit() {}

    onSubmit({ value, valid }: { value: form1, valid: boolean }) {

        if (!this.form1.valid) {
            this.toastr.error('No ha llenado todos los campos!', 'Error!');
        } else {
            this.categoriasService
                .crearProveedor(value)
                .subscribe(
                (res) => {
                    this.router.navigate(['/pages/categories/list']).then(() =>{
                        this.toastr.success('Category created!');
                    });
                }
                );
        }
    }
    send({ value, valid }) {
        if (!this.form1.valid) {
            return;
        } else {
            this.form = {
                nombreRazonSocial: this.nombreRazonSocial,
                descripcionRazonSocial: this.descripcionRazonSocial,
                rifRazonSocial: this.rifRazonSocial,
                telefono1: this.telefono1,
                telefono2: this.telefono2,
                direccion: this.direccion,
                activo: this.activo,

            };
            if (value.activo) {
                value.activo = 1;
            } else {
                value.activo = 0;
            }
            //value.created_at = new Date();
            value.updated_by = "";
            value.updated_by = "";
            this.categoriasService
                .crearProveedor(value)
                .subscribe(
                //result => this.proveedor = result,  
                (res) => {
                    /*    this.router.navigate(['/pages/providers/list']);*/
                    this.proveedor = res;
                },
                error => this.errMsg = <any>error
                );
        }
    }
    notNullValidator(control: FormControl): {[key:string]: any}{
        const checkIt = control.value
        if (checkIt === null || checkIt.trim() == '' ) {
            return {invalid:true};
        }
    }
}
