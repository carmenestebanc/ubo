"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var login_service_1 = require("../login.service");
var app_component_1 = require("../../../../app.component");
var LoginComponent = (function () {
    function LoginComponent(router, fb, loginService, toastr, vcr, appcomp) {
        this.loginService = loginService;
        this.toastr = toastr;
        this.appcomp = appcomp;
        this.toastr.setRootViewContainerRef(vcr);
        this.router = router;
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, emailValidator])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    LoginComponent.prototype._recover = function (event) {
        if (event) {
            event.preventDefault();
        }
        this.router.navigate(['login/recover']);
    };
    LoginComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['pages/agencies']);
            localStorage.setItem('bearer', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJjN2Q5NDIyZjY2NTlhMWQwNWI5YzhhMDcxMzA1Y2FiODEyNDI1MDdlOGE1Njc5ZTEyNzY3MTc3OTli'
                + 'ZjM1Nzk1YzZjODA1MzNjMjdlMzA4In0.eyJhdWQiOiIyIiwianRpIjoiYmM3ZDk0MjJmNjY1OWExZDA1YjljOGEwNzEzMDVjYWI4MTI0MjUwN2U4YTU2NzllMTI3Njcx'
                + 'Nzc5OWJmMzU3OTVjNmM4MDUzM2MyN2UzMDgiLCJpYXQiOjE1MTY0NTkxMDcsIm5iZiI6MTUxNjQ1OTEwNywiZXhwIjoxNTE2NTQ1NTA3LCJzdW'
                + 'IiOiI2Iiwic2NvcGVzIjpbXX0.HlALY8b2zp2z2D_N3Qvxjki-WA6fNIPGpVgHZtA0Kq0dnBWClo_XpJ14H5SShCXfYFd-Q6k_2qSl7NNSNWYjCrmaM_LDJX8Atpe83JgvP5XWj2afjKWCkA8nDBp'
                + 'T6DSw9yKUfO7knm4lSedK7ndOwmPyrhdjwmjjupVWfu6on82jQhBskmNP69HoF8d9WpvVdr-q-20w2RCX6RPOCjsH4EQ7kpA5RocAlBxCkwcJ-7OS3qdFSxndeLz'
                + '55XUXjfMvws28VJhY1WRPPCa2WBDB5u2zdY2pDb6xMjIOsh2ue-uV6Vn2vNRIySg6MbEtJ72OrORoYxgad4_xrwUoZ14-RrfU1j7YJlbzkDzglkOBqsgTyJpkaisArxRWODj'
                + 'ch5Bu5VV4TqUU-2VNA-5oF09aKqzzLyxobQxZ8zaU1Cua4eALy6S6rMqdE-wJI_lnVAq55OwXHC-MAY1Wm19fm1qLSa'
                + 'AIZTIrKi8eIjTAEuaL_RkV630Y5x7OHfkq6uuovXt-ZmwfckzE_z0txtI6tONlfXNY_TDm9ECSNYTAg3qdZqhdkQ9MlT'
                + 'YL8I8CR5CC74U0Q6IkoYrVmk7bNQdkvAjOXh5QSXH0_F-J3jGFmFc-oxYIgNLqQYfnZBEeo9O_JqDCqXkeIMIDCDov67A'
                + 'DuSJaD9JEPO7mqem55TU0YnvAUJw');
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'ubl-login',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        login_service_1.LoginService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_1.ViewContainerRef,
        app_component_1.AppComponent])
], LoginComponent);
exports.LoginComponent = LoginComponent;
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
exports.emailValidator = emailValidator;
var _a;
//# sourceMappingURL=login.component.js.map