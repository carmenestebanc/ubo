import { emailValidator } from '../login/login.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, ViewContainerRef, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

type TStep = 'init' | 'token'  | 'pregunta';

@Component({
  selector: 'ubl-recover',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class RecoverComponent implements OnInit {
    
  _form:FormGroup;
  _formQuestion:FormGroup;
  _formToken:FormGroup;

  _headerTitle:string = 'title default';
  _step:TStep = 'init';
  _findData = false;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _rest: LoginService,
    private _toastr: ToastsManager,
    private _vcr: ViewContainerRef
  ) {
    this._toastr.setRootViewContainerRef(_vcr);
  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {

    this._form = this._fb.group({
      email: ['', Validators.compose([Validators.required, emailValidator])],
      tipo: ['token', Validators.compose([Validators.required])]
    });

    this._formToken = this._fb.group({
      email:[],
      token_recovery:['',Validators.required],
    });

  }

  _returnLogin(event:Event) {
    if(event) {
      event.preventDefault();
    }
    this._router.navigate(['/login']);
  }

  _onSubmitStep1(event:Event) {
    if(event) {
      event.preventDefault();
    }
    this._findData = true;
    this._rest.post('admin/recovery',this._form.value).subscribe(
      response=>{
        this._viewResponse(response);
      },
      error=>{

        const msg = JSON.parse(error).message;
        this._findData = false;
        this._toastr.error(msg, 'Ha ocurrido un error');
      }
    );
  }

  _onSubmitRecover(event:Event,value:Object,endpoint:string) {
    if(event) {
      event.preventDefault();
    }
    this._findData = true;
    value['email'] = this._form.value.email;
    this._rest.post(endpoint,value).subscribe(
      response=>{
        this._viewResponse(response);
        if(!response.error) {
          setTimeout(() => {
            this._router.navigate(['/login']);
          }, 1000);
        }
      },
      error=>{
        const msg = JSON.parse(error).message;
        this._toastr.error(msg,'Ocurrio un error');
        this._findData = false;
      }
    );
  }

  _viewResponse(response) {
    this._findData = false;
    if(response.error) {
      this._toastr.warning ('Ha ocurrido un error', response.message);
      return;
    }

    if(response.message) {
      this._toastr.info(response.message);
    }

    this._step = this._form.value.tipo;
  }

}