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
var agency_service_1 = require("../shared/agency.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var validations_service_1 = require("../../shared-components/form-elements/validations/validations.service");
var AgencyUpdateComponent = (function () {
    function AgencyUpdateComponent(agencyService, validation, route, router, formBuilder, toastr, vcr) {
        this.agencyService = agencyService;
        this.validation = validation;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.vcr = vcr;
        this.errMsg = '';
        this.atributos = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.form1 = formBuilder.group({
            id: [null,],
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
    }
    AgencyUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.agencyService
                .getAgency(id)
                .subscribe(function (res) {
                _this.agency = res;
                if (_this.agency.status == "1") {
                    _this.agency.status = true;
                }
                else {
                    _this.agency.status = false;
                }
                _this.form1.patchValue(_this.agency);
            }, function (error) {
                _this.toastr.info('Something went wrong.');
            });
        });
    };
    AgencyUpdateComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.agencyService
            .updateAgency(value)
            .subscribe(
        //result => this.proveedor = result,  
        function (res) {
            _this.agency = res;
            _this.router.navigate(['/pages/agencies/list']).then(function () {
                _this.toastr.success('Agency updated successfully!');
            });
        }, function (error) {
            _this.toastr.info('Something went wrong.');
        });
    };
    return AgencyUpdateComponent;
}());
AgencyUpdateComponent = __decorate([
    core_1.Component({
        selector: 'ubl-agency-update',
        templateUrl: './agency-update.component.html',
        styleUrls: ['./agency-update.component.scss'],
        providers: [validations_service_1.ValidationsService, agency_service_1.AgencyService]
    }),
    __metadata("design:paramtypes", [agency_service_1.AgencyService,
        validations_service_1.ValidationsService,
        router_1.ActivatedRoute,
        router_1.Router,
        forms_1.FormBuilder, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef])
], AgencyUpdateComponent);
exports.AgencyUpdateComponent = AgencyUpdateComponent;
var _a;
//# sourceMappingURL=agency-update.component.js.map