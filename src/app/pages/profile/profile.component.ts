import { AgentService } from '../agents/shared/agent.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { setTimeout } from 'core-js/library/web/timers';

@Component({
  selector: 'ubl-profile',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class ProfileComponent implements OnInit {
  _form = {
    data:null,
    question:null,
    password:null,
  };
  _data:any ={};

  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    private _us:AgentService
  ) {
    this.toastr.setRootViewContainerRef(this.vcr);
  }

  ngOnInit(): void {
    this._us.get('admin/user/datos').subscribe(
      response => {
        this._data = response;
        this._form.data.setValue({
          name:this._data.name,
          lastname:this._data.lastname,
        });
      },
      error=> {
        this.toastr.error('Error consulting user information');
      }
    );
    this._initForm();
  }

  private _initForm() {

    // PUT /user/datos/{id}
    this._form.data = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,Validators.maxLength(255)])],
      lastname: ['', Validators.compose([Validators.required,Validators.maxLength(255)])]
    });

    // PUT /user/password/{id}
    this._form.password = this.formBuilder.group({
      oldPassword: [ null, Validators.compose([Validators.minLength(6),  Validators.maxLength(16), Validators.required])],
      password:  [ null, Validators.compose([Validators.minLength(6),  Validators.maxLength(16), Validators.required])],
      confirmed:  [ null, Validators.compose([(c:FormControl)=> {
        const password = (this._form.password)?this._form.password.get('password'):null;
        if(password && password.valid && c.value  === password.value) {
            return null;
        }
        return {confirmed:{valid:false}};
      },Validators.required]) ],
    });


  }

  _onSubmit({value},type:string) {
    let endpoint = '';
    switch(type) {
      case 'data':
        endpoint = 'admin/user/datos';
        value.pregunta = this._data.pregunta;
        value.respuesta = this._data.respuesta;
        break;
      default:
        if(value.password !== value.confirmed) {
          this.toastr.error('Passwords doesn´t match');
          return;
        }
        endpoint = 'admin/user/password';
        break;
    }
    this._us.put(endpoint,value).subscribe(
      response=>{
        setTimeout(() => this.toastr.success('User updated', 'Ok') , 1000);
        this._data = response;
        if(response !== null) {
          this._logout();
        }
      },
      error=>{
        const msg = error.json().message || 'An error occurred while updating user data.';
        this.toastr.error(msg);
      }
    );
  }

  private _emailValidator(control: FormControl): {[key: string]: any} {
    const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
  }

  private _logout() {
    localStorage.removeItem('bearer');
    this._router.navigate(['/login']);
  }
}
