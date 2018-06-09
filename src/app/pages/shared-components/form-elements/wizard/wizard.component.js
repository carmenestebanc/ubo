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
var wizard_validation_service_1 = require("./wizard-validation.service");
var WizardComponent = (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.details = {};
        this.steps = [
            { name: 'Account Information', icon: 'fa-lock', active: true, valid: false, hasError: false },
            { name: 'Personal Information', icon: 'fa-user', active: false, valid: false, hasError: false },
            { name: 'Payment Information', icon: 'fa-credit-card', active: false, valid: false, hasError: false },
            { name: 'Confirm Your Details', icon: 'fa-check-square-o', active: false, valid: false, hasError: false }
        ];
        this.accountForm = this.formBuilder.group({
            'username': ['', forms_1.Validators.required],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': ['', forms_1.Validators.required],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, wizard_validation_service_1.WizardValidationService.emailValidator])]
        }, { validator: wizard_validation_service_1.WizardValidationService.matchingPasswords('password', 'confirmPassword') });
        this.personalForm = this.formBuilder.group({
            'salutation': [''],
            'firstname': ['', forms_1.Validators.required],
            'lastname': ['', forms_1.Validators.required],
            'gender': [''],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, wizard_validation_service_1.WizardValidationService.emailValidator])],
            'phone': ['', forms_1.Validators.required],
            'zipcode': ['', forms_1.Validators.required],
            'country': ['', forms_1.Validators.required],
            'state': [''],
            'address': ['']
        });
        this.paymentForm = this.formBuilder.group({
            'cardtype': ['', forms_1.Validators.required],
            'cardnumber': ['', forms_1.Validators.compose([forms_1.Validators.required, wizard_validation_service_1.WizardValidationService.numberValidator])],
            'cvc': ['', forms_1.Validators.compose([forms_1.Validators.required, wizard_validation_service_1.WizardValidationService.numberValidator])],
            'expirymonth': ['', forms_1.Validators.required],
            'expiryyear': ['', forms_1.Validators.required]
        });
    }
    WizardComponent.prototype.next = function () {
        var accountForm = this.accountForm;
        var personalForm = this.personalForm;
        var paymentForm = this.paymentForm;
        if (this.steps[this.steps.length - 1].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index < steps.length - 1) {
                if (step.active) {
                    if (step.name == 'Account Information') {
                        if (accountForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Personal Information') {
                        if (personalForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Payment Information') {
                        if (paymentForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                }
            }
        });
        this.details.username = this.accountForm.value.username;
        this.details.fullname = this.personalForm.value.firstname + " " + this.personalForm.value.lastname;
        this.details.gender = this.personalForm.value.gender;
        this.details.email = this.personalForm.value.email;
        this.details.phone = this.personalForm.value.phone;
        this.details.country = this.personalForm.value.country;
        this.details.zipcode = this.personalForm.value.zipcode;
        this.details.address = this.personalForm.value.address;
        this.details.cardtype = this.paymentForm.value.cardtype;
        this.details.cardnumber = this.paymentForm.value.cardnumber;
    };
    WizardComponent.prototype.prev = function () {
        if (this.steps[0].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index != 0) {
                if (step.active) {
                    step.active = false;
                    steps[index - 1].active = true;
                    return true;
                }
            }
        });
    };
    WizardComponent.prototype.confirm = function () {
        this.steps.forEach(function (step) { return step.valid = true; });
    };
    return WizardComponent;
}());
WizardComponent = __decorate([
    core_1.Component({
        selector: 'ubl-wizard',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './wizard.component.html',
        styleUrls: ['./wizard.component.scss'],
        providers: [wizard_validation_service_1.WizardValidationService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], WizardComponent);
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map