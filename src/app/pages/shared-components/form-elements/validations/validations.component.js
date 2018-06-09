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
var forms_1 = require("@angular/forms");
var ValidationsComponent = (function () {
    function ValidationsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ValidationsComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            simple: ['', forms_1.Validators.required],
            first_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), notNullValidator, justLettersValidator, tooManyWordsValidator])],
            last_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), notNullValidator, justLettersValidator, tooManyWordsValidator])],
            minLength: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            maxLength: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(10)])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, emailValidator, forms_1.Validators.maxLength(40)])],
            password: ['', forms_1.Validators.required],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required, cellphoneValidator, forms_1.Validators.maxLength(30), notNullValidator])],
            confirmPassword: ['', forms_1.Validators.required],
            website: ['', forms_1.Validators.compose([forms_1.Validators.required, websiteValidator])]
        }, { validator: matchingPasswords('password', 'confirmPassword') });
    };
    ValidationsComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        // this.logger.info(value, valid);
    };
    return ValidationsComponent;
}());
ValidationsComponent = __decorate([
    core_1.Component({
        selector: 'ubl-validations',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './validations.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ValidationsComponent);
exports.ValidationsComponent = ValidationsComponent;
function emailValidator(control) {
    var emailRegexp = /^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
exports.emailValidator = emailValidator;
function websiteValidator(control) {
    var websiteRegexp = /(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.\w+\/?.+$/;
    if (control.value && !websiteRegexp.test(control.value)) {
        return { invalidUrl: true };
    }
}
exports.websiteValidator = websiteValidator;
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
function cellphoneValidator(control) {
    var cellphone = /^\+\d{1,4} \d{1,3}[-]\d{4,12}$/;
    if (control.value && !cellphone.test(control.value)) {
        return { invalidcellphone: true };
    }
}
exports.cellphoneValidator = cellphoneValidator;
function notNullValidator(control) {
    var checkIt = control.value;
    if (checkIt.trim() == '') {
        return { invalid: true };
    }
}
exports.notNullValidator = notNullValidator;
function justLettersValidator(control) {
    var justLettersRegexp = /^[a-zA-Z\s]*$/;
    if (control.value && !justLettersRegexp.test(control.value)) {
        return { invalidString: true };
    }
}
exports.justLettersValidator = justLettersValidator;
function tooManyWordsValidator(control) {
    if (control.value.split(" ").length > 3) {
        return { tooManyWords: true };
    }
}
exports.tooManyWordsValidator = tooManyWordsValidator;
//# sourceMappingURL=validations.component.js.map