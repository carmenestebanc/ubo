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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(router, fb) {
        this.router = router;
        this.form = fb.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, emailValidator])],
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: matchingPasswords('password', 'confirmPassword') });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.confirmPassword = this.form.controls['confirmPassword'];
    }
    RegisterComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['/login']);
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'ubl-register',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
exports.emailValidator = emailValidator;
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}
exports.matchingPasswords = matchingPasswords;
//# sourceMappingURL=register.component.js.map