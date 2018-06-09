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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var agency_service_1 = require("../shared/agency.service");
var validations_service_1 = require("../../shared-components/form-elements/validations/validations.service");
var AgenciesAddComponent = (function () {
    function AgenciesAddComponent(router, formBuilder, agencyService, toastr, validation, vcr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.agencyService = agencyService;
        this.toastr = toastr;
        this.validation = validation;
        this.vcr = vcr;
        this.errors = [];
    }
    AgenciesAddComponent.prototype.ngOnInit = function () {
        this.toastr.setRootViewContainerRef(this.vcr);
        this.form1 = this.formBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator])],
            name_business: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator])],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.cellphoneValidator, forms_1.Validators.maxLength(60), this.validation.notNullValidator])],
            address: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50), this.validation.notNullValidator])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.emailValidator, forms_1.Validators.maxLength(40)])],
            name_contact: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.justLettersValidator, this.validation.notNullValidator, this.validation.countWordsValidator])],
            tax_id: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(15), this.validation.notNullValidator])],
            status: [false,],
            created_by: ['1',]
        });
    };
    AgenciesAddComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!this.form1.valid) {
            this.toastr.error('There are empty fields!', 'Error!');
        }
        else {
            value.created_by = '1';
            this.agencyService
                .createAgency(value)
                .subscribe(function (res) {
                _this.agency1 = res;
                _this.router.navigate(['/pages/agencies/list']).then(function () {
                    _this.toastr.success('Agency create successfully!');
                });
            }, function (error) {
                _this.toastr.info('Something went wrong.');
            });
        }
    };
    return AgenciesAddComponent;
}());
AgenciesAddComponent = __decorate([
    core_1.Component({
        selector: 'ubl-agencies-add',
        templateUrl: './agencies-add.component.html',
        styleUrls: ['./agencies-add.component.scss'],
        providers: [validations_service_1.ValidationsService, agency_service_1.AgencyService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        agency_service_1.AgencyService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, validations_service_1.ValidationsService,
        core_2.ViewContainerRef])
], AgenciesAddComponent);
exports.AgenciesAddComponent = AgenciesAddComponent;
var _a;
//# sourceMappingURL=agencies-add.component.js.map