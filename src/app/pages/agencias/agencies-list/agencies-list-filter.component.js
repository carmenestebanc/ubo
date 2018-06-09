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
var core_1 = require("angular2-logger/core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var validations_service_1 = require("../../shared-components/form-elements/validations/validations.service");
var rest_service_component_1 = require("../../../rest/rest-service.component");
var shared_services_component_1 = require("../../shared-components/services/shared-services.component");
var AgenciesListFilterComponent = (function () {
    /**
     * Agencies list component controller.
     */
    function AgenciesListFilterComponent(formBuilder, toastr, logger, vcr, validation, restService, sharedServices) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.logger = logger;
        this.vcr = vcr;
        this.validation = validation;
        this.restService = restService;
        this.sharedServices = sharedServices;
        this._status = [
            'Enabled',
            'Disabled',
        ];
        this.agencies = [];
        this.agenciesSelect = [];
        this.data = [];
        this.findData = false;
        this.successFound = true;
        this.noParameters = false;
        this.toastr.setRootViewContainerRef(vcr);
        this.restService.setRestUrl("agencies");
    }
    /**
     * Class initialization.
     */
    AgenciesListFilterComponent.prototype.ngOnInit = function () {
        this.getAllAgencies();
        this.initForm();
        //this.loadAgencies();
        // this.sharedServices.loadAgencies(this.agenciesSelect);    
    };
    /**
     * Gets agencies list from data base.
     */
    AgenciesListFilterComponent.prototype.getAllAgencies = function () {
        var _this = this;
        this.restService.getList()
            .subscribe(function (res) {
            _this.agencies = res;
            //Fills select list.        
            _this.agenciesSelect = _this.agencies.map(function (field) {
                return {
                    name: field.name,
                    id: field.id,
                    data: field
                };
            });
        });
    };
    /**
     * Forms initialization.
     */
    AgenciesListFilterComponent.prototype.initForm = function () {
        this.searchForm = this.formBuilder.group({
            'status': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.maxLength(25), this.validation.justLettersValidator])),
            'agencyName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.maxLength(25)]))
        }, {
            validator: this.noSearchParameters.bind(this)
        });
        this.filterForm = this.formBuilder.group({
            'filterForm': this.searchForm,
        });
    };
    /**
     * Load Agencies in select list.
     */
    AgenciesListFilterComponent.prototype.loadAgencies = function () {
        this.logger.info("---loadAgencies()---");
        this.agenciesSelect = this.agencies.map(function (field) {
            return {
                name: field.name,
                id: field.id,
                data: field
            };
        });
    };
    /**
     * Event triggered when search button is pressed.
     */
    AgenciesListFilterComponent.prototype.onSubmit = function (page) {
        var _this = this;
        this.findData = true;
        var params = new http_1.URLSearchParams();
        var forms = ['agencyName', 'status'];
        var value;
        var _loop_1 = function (form) {
            if (this_1.searchForm.value[form].length) {
                if (form == 'agencyName') {
                    value = this_1.agenciesSelect.filter(function (obj) { return obj.name === _this.searchForm.value[form]; }).map(function (obj) { return obj.name; }).shift();
                    params.set("name", value);
                }
                else {
                    value = this_1.searchForm.value[form];
                    if (value == 'Enabled') {
                        value = 1;
                        params.set(form, value);
                    }
                    else {
                        if (value == 'Disabled') {
                            value = 0;
                            params.set(form, value);
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, forms_2 = forms; _i < forms_2.length; _i++) {
            var form = forms_2[_i];
            _loop_1(form);
        }
        /**
         * Loads agencies after filter.
         */
        this.restService.loadDataByParams('agencies', params).subscribe(function (response) {
            _this.findData = false;
            if (!response['data'].length) {
                _this.successFound = false;
                _this.toastr.info('No results found');
                _this.data = [];
            }
            else {
                if (response['data'].length == _this.agencies.length) {
                    if (response['data'][0].status == params.get('status') ||
                        response['data'][0].name == params.get('agencyName')) {
                        _this.data = response['data'];
                        _this.successFound = true;
                        _this.total = response['total'];
                    }
                    else {
                        _this.successFound = false;
                        _this.data = [];
                        _this.toastr.info('No results found');
                    }
                }
                else {
                    _this.data = response['data'];
                    _this.successFound = true;
                    _this.total = response['total'];
                }
            }
        }, function (error) {
            _this.data = [];
            _this.successFound = false;
            _this.toastr.info('No results found');
            _this.findData = false;
            _this.data = [];
        });
    };
    /**
     * Deletes an agency.
     * @param id Agency id.
     */
    AgenciesListFilterComponent.prototype.delete = function (id) {
        var _this = this;
        this.logger.info("---delete()---");
        this.restService.delete(id).subscribe(function (res) {
            _this.toastr.success('Agency deleted!');
            _this.data.forEach(function (t, i) {
                if (t.id === id) {
                    _this.data.splice(i, 1);
                }
            });
        });
    };
    /**
     * Sets the agency to delete.
     */
    AgenciesListFilterComponent.prototype.setAgency = function (agencyid) {
        this.logger.info("---setAgency()---");
        this.agencyid = agencyid;
    };
    /**
     * Validates if there are not parameters on both search fields.
     */
    AgenciesListFilterComponent.prototype.noSearchParameters = function (group) {
        var agencyName = group.value.agencyName;
        var status = group.value.status;
        if ((agencyName.trim() === '') && (status.trim() === '')) {
            this.noParameters = true;
            return { missingParameters: true };
        }
        else {
            this.noParameters = false;
            return { missingParameters: false };
        }
    };
    return AgenciesListFilterComponent;
}());
AgenciesListFilterComponent = __decorate([
    core_2.Component({
        selector: 'ubs-filter-enabled',
        templateUrl: './agencies-list-enabled-filter.component.html',
        styleUrls: ['./agencies-list-enabled-filter.component.scss'],
        providers: [validations_service_1.ValidationsService, rest_service_component_1.RestService, shared_services_component_1.SharedServicesComponent]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, typeof (_b = typeof core_1.Logger !== "undefined" && core_1.Logger) === "function" && _b || Object, core_2.ViewContainerRef,
        validations_service_1.ValidationsService,
        rest_service_component_1.RestService,
        shared_services_component_1.SharedServicesComponent])
], AgenciesListFilterComponent);
exports.AgenciesListFilterComponent = AgenciesListFilterComponent;
var _a, _b;
//# sourceMappingURL=agencies-list-filter.component.js.map