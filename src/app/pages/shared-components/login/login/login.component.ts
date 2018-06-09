import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, ViewEncapsulation, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'ubl-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  public router: Router;
  public appcomp: AppComponent;
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public mocklogin: {
    token_type: 'Bearer',
    expires_in: 86400,
    access_token: 'golas',
    refresh_token: 'def50200efaf6cb2b248e8f854f3557deda19c304d52fb942b11796f72533ce2017cb8ea925231b699c12cb8aed3f3cb7c1380b33ddee29e9758c133c92ff503e11f82fabdc0941db3b357753d775a79e82ca0ab28fc783c93e1699ba4fd1f495e0369912251b3795512d63092f33fb0c1b39c55ccfa8c1bf173bc6e9f2c43e999b58a5fc1d739945b51c74d10cc973912973936ad3c02a6c756e900415cc1a3493b54d8c7ee35a7f56c2dba8e2d1f5716c9b1ce963ba420d4f335c63fcd95d3e2cc0a822c16fbb05b9c248d0ca9ff97f581281cdd3f773c0224e31c7ed1a20075d622aa9c3ce73210dd21adfed97db26db58db38589c61df27751a352bb5bd4f9a0e0d18b7017e3278a1709e918787fd0e10c656b0b4bcb4e4f55514db84011b7d8afb0acee4b1dccf7c4707af355c3586df319f7f7605bcc94fb78b85cd714668b7f35a4c1d03e2fdc27cfc1e3d3afa417455b192b70312609e324e69bc1d7db',
    role: 3
  }


  constructor(
    router: Router,
    fb: FormBuilder,
    private loginService: LoginService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    appcomp: AppComponent
  ) {
    this.appcomp = appcomp;
    this.toastr.setRootViewContainerRef(vcr);
    this.router = router;
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  _recover(event: Event) {
    if (event) {
      event.preventDefault();
    }
    this.router.navigate(['login/recover']);
  }

  onSubmit(values: Object): void {
    if (this.form.valid) {
      this.router.navigate(['pages/agencies']);
      localStorage.setItem('bearer', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJjN2Q5NDIyZjY2NTlhMWQwNWI5YzhhMDcxMzA1Y2FiODEyNDI1MDdlOGE1Njc5ZTEyNzY3MTc3OTli'
      +'ZjM1Nzk1YzZjODA1MzNjMjdlMzA4In0.eyJhdWQiOiIyIiwianRpIjoiYmM3ZDk0MjJmNjY1OWExZDA1YjljOGEwNzEzMDVjYWI4MTI0MjUwN2U4YTU2NzllMTI3Njcx'
      +'Nzc5OWJmMzU3OTVjNmM4MDUzM2MyN2UzMDgiLCJpYXQiOjE1MTY0NTkxMDcsIm5iZiI6MTUxNjQ1OTEwNywiZXhwIjoxNTE2NTQ1NTA3LCJzdW'
      +'IiOiI2Iiwic2NvcGVzIjpbXX0.HlALY8b2zp2z2D_N3Qvxjki-WA6fNIPGpVgHZtA0Kq0dnBWClo_XpJ14H5SShCXfYFd-Q6k_2qSl7NNSNWYjCrmaM_LDJX8Atpe83JgvP5XWj2afjKWCkA8nDBp'
      +'T6DSw9yKUfO7knm4lSedK7ndOwmPyrhdjwmjjupVWfu6on82jQhBskmNP69HoF8d9WpvVdr-q-20w2RCX6RPOCjsH4EQ7kpA5RocAlBxCkwcJ-7OS3qdFSxndeLz'
      +'55XUXjfMvws28VJhY1WRPPCa2WBDB5u2zdY2pDb6xMjIOsh2ue-uV6Vn2vNRIySg6MbEtJ72OrORoYxgad4_xrwUoZ14-RrfU1j7YJlbzkDzglkOBqsgTyJpkaisArxRWODj'
      +'ch5Bu5VV4TqUU-2VNA-5oF09aKqzzLyxobQxZ8zaU1Cua4eALy6S6rMqdE-wJI_lnVAq55OwXHC-MAY1Wm19fm1qLSa'
      +'AIZTIrKi8eIjTAEuaL_RkV630Y5x7OHfkq6uuovXt-ZmwfckzE_z0txtI6tONlfXNY_TDm9ECSNYTAg3qdZqhdkQ9MlT'
      +'YL8I8CR5CC74U0Q6IkoYrVmk7bNQdkvAjOXh5QSXH0_F-J3jGFmFc-oxYIgNLqQYfnZBEeo9O_JqDCqXkeIMIDCDov67A'
      +'DuSJaD9JEPO7mqem55TU0YnvAUJw');
      /*this.loginService.login(values).subscribe (
        response => {
          console.log(JSON.stringify(response));
          localStorage.setItem('bearer',response.access_token);

          this.appcomp._checkRole();
          this.router.navigate(['pages/users']);
        },
        error => {
          try{
            const msg = JSON.parse(error).message;
            this.toastr.error(msg,'Error');
          }catch(e){
            this.toastr.error('Email y/o contraseña son incorrectos','Error');
          }
        }
      );*/
    }
  }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
  const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}
