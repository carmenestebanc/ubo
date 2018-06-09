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
// import {  FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var client_service_1 = require("../shared/client.service");
var validations_service_1 = require("../../shared-components/form-elements/validations/validations.service");
var errors_service_1 = require("../../shared-components/error/errors.service");
var ClientsAddComponent = (function () {
    function ClientsAddComponent(router, formBuilder, clientService, errors, validation, toastr, vcr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.clientService = clientService;
        this.errors = errors;
        this.validation = validation;
        this.toastr = toastr;
        this.vcr = vcr;
    }
    ClientsAddComponent.prototype.ngOnInit = function () {
        this.toastr.setRootViewContainerRef(this.vcr);
        this.form1 = this.formBuilder.group({
            first_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
            last_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
            birth_date: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.isValidDate])],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.cellphoneValidator, forms_1.Validators.maxLength(15), this.validation.notNullValidator])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.emailValidator, forms_1.Validators.maxLength(40)])],
            country: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(60), this.validation.justLettersValidator])],
            state: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(60), this.validation.justLettersValidator])],
            city: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(60), this.validation.justLettersValidator])],
            address: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(60)])],
        });
    };
    ClientsAddComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!this.form1.valid) {
            this.toastr.error('There are empty fields!', 'Error!');
        }
        else {
            this.clientService
                .createClient(value)
                .subscribe(function (res) {
                _this.client1 = res;
                _this.router.navigate(['/pages/clients/list']).then(function () {
                    _this.toastr.success('Client created successfully!');
                }, function (error) {
                    var emailError = _this.errors.emailTakenError(error);
                    if (emailError == 0) {
                        _this.toastr.info('Something went wrong.');
                    }
                });
            });
        }
    };
    return ClientsAddComponent;
}());
ClientsAddComponent = __decorate([
    core_1.Component({
        selector: 'ubl-clients-add',
        templateUrl: './clients-add.component.html',
        styleUrls: ['./clients-add.component.scss'],
        providers: [validations_service_1.ValidationsService, client_service_1.ClientService, errors_service_1.ErrorsService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        client_service_1.ClientService,
        errors_service_1.ErrorsService,
        validations_service_1.ValidationsService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef])
], ClientsAddComponent);
exports.ClientsAddComponent = ClientsAddComponent;
var _a;
//# sourceMappingURL=clients-add.component.js.map