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
var agency_service_1 = require("../shared/agency.service");
require("rxjs/add/operator/switchMap");
var ng2_toastr_1 = require("ng2-toastr");
var AgencyDetailComponent = (function () {
    function AgencyDetailComponent(agencyService, route, router, toastr, vcr) {
        this.agencyService = agencyService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.errMsg = '';
        this.atributos = [];
        this.toastr.setRootViewContainerRef(vcr);
    }
    AgencyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var agency = params['id'];
            _this.agencyService
                .getAgency(agency)
                .subscribe(function (c) { return _this.agency = c; });
        }, function (error) {
            _this.toastr.info('Something went wrong.');
        });
    };
    return AgencyDetailComponent;
}());
AgencyDetailComponent = __decorate([
    core_1.Component({
        selector: 'ubs-agency-detail',
        templateUrl: './agency-detail.component.html',
        styleUrls: ['./agency-detail.component.scss']
    }),
    __metadata("design:paramtypes", [agency_service_1.AgencyService,
        router_1.ActivatedRoute,
        router_1.Router, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_1.ViewContainerRef])
], AgencyDetailComponent);
exports.AgencyDetailComponent = AgencyDetailComponent;
var _a;
//# sourceMappingURL=agency-detail.component.js.map