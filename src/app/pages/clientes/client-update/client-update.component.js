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
var router_1 = require("@angular/router");
var client_service_1 = require("../shared/client.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var validations_service_1 = require("../../shared-components/form-elements/validations/validations.service");
var core_3 = require("angular2-logger/core");
var errors_service_1 = require("../../shared-components/error/errors.service");
var ClientUpdateComponent = (function () {
    function ClientUpdateComponent(clientService, route, router, logger, errors, validation, formBuilder, toastr, vcr) {
        this.clientService = clientService;
        this.route = route;
        this.router = router;
        this.logger = logger;
        this.errors = errors;
        this.validation = validation;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.vcr = vcr;
        this.errMsg = '';
        this.toastr.setRootViewContainerRef(vcr);
        this.form1 = formBuilder.group({
            id: [null,],
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
    }
    ClientUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.clientService
                .getClient(id)
                .subscribe(function (res) {
                _this.client = res;
                var form = _this.client;
                form = {
                    "id": _this.client.id,
                    "first_name": _this.client.first_name,
                    "last_name": _this.client.last_name,
                    "birth_date": _this.client.birth_date,
                    "email": _this.client.email,
                    "phone": _this.client.phone,
                    "state": _this.client.state,
                    "country": _this.client.country,
                    "city": _this.client.city,
                    "address": _this.client.address
                };
                _this.form1.setValue(form);
            }, function (error) {
                _this.toastr.info('Something went wrong.');
            });
        });
    };
    ClientUpdateComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.clientService
            .updateClient(value)
            .subscribe(function (res) {
            _this.client = res;
            _this.router.navigate(['/pages/clients/list']).then(function () {
                _this.toastr.success('Client updated successfully!');
            });
        }, function (error) {
            var emailError = _this.errors.emailTakenError(error);
            if (emailError == 0) {
                _this.toastr.info('Something went wrong.');
            }
        });
    };
    return ClientUpdateComponent;
}());
ClientUpdateComponent = __decorate([
    core_1.Component({
        selector: 'ubl-client-update',
        templateUrl: './client-update.component.html',
        styleUrls: ['./client-update.component.scss'],
        providers: [validations_service_1.ValidationsService, client_service_1.ClientService, errors_service_1.ErrorsService]
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        router_1.Router, typeof (_a = typeof core_3.Logger !== "undefined" && core_3.Logger) === "function" && _a || Object, errors_service_1.ErrorsService,
        validations_service_1.ValidationsService,
        forms_1.FormBuilder, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object, core_2.ViewContainerRef])
], ClientUpdateComponent);
exports.ClientUpdateComponent = ClientUpdateComponent;
var _a, _b;
//# sourceMappingURL=client-update.component.js.map