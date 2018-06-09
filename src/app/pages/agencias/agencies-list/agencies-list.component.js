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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var agency_service_1 = require("../shared/agency.service");
var rest_service_component_1 = require("../../../rest/rest-service.component");
var AgenciesListComponent = (function () {
    function AgenciesListComponent(agencyService, restService, toastr, vcr, router) {
        this.agencyService = agencyService;
        this.restService = restService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.router = router;
        this.agencies = [];
        this.toastr.setRootViewContainerRef(vcr);
    }
    // consulta los usuarios en el servidor del API usando observables
    AgenciesListComponent.prototype.getAgencies = function () {
        var _this = this;
        this.agencyService.getAgencies()
            .subscribe(function (agencies) { return _this.agencies = agencies; });
    };
    // métodos invocados al inicio
    AgenciesListComponent.prototype.ngOnInit = function () {
        this.getAgencies();
    };
    AgenciesListComponent.prototype.setAgency = function (agencyid) {
        this.agencyid = agencyid;
    };
    AgenciesListComponent.prototype.delete = function (id) {
        var _this = this;
        this.restService.delete(id).subscribe(function (res) {
            _this.toastr.success('Agency deleted!');
            // elimina la agencia del objto agency
            _this.agencies.forEach(function (t, i) {
                if (t.id === id) {
                    _this.agencies.splice(i, 1);
                }
            });
        });
    };
    return AgenciesListComponent;
}());
AgenciesListComponent = __decorate([
    core_1.Component({
        selector: 'ubl-agencies-list',
        templateUrl: './agencies-list.component.html',
        styleUrls: ['./agencies-list.component.scss'],
        providers: [agency_service_1.AgencyService, rest_service_component_1.RestService]
    }),
    __metadata("design:paramtypes", [agency_service_1.AgencyService,
        rest_service_component_1.RestService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef,
        router_1.Router])
], AgenciesListComponent);
exports.AgenciesListComponent = AgenciesListComponent;
var _a;
//# sourceMappingURL=agencies-list.component.js.map