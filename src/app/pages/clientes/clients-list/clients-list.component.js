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
var core_2 = require("angular2-logger/core");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_3 = require("@angular/core");
var rest_service_component_1 = require("../../../rest/rest-service.component");
var ClientsListComponent = (function () {
    /**
     * ClientsListComponent constructor.
     */
    function ClientsListComponent(restService, toastr, vcr, router, logger) {
        this.restService = restService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.router = router;
        this.logger = logger;
        this.clients = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.restService.setRestUrl("clients");
    }
    /**
     * Gets list of clients from data base.
     */
    ClientsListComponent.prototype.getClients = function () {
        var _this = this;
        this.logger.info("--getClients()---");
        this.restService.getList()
            .subscribe(function (clients) {
            _this.clients = clients;
        }, function (error) {
            _this.toastr.info('Something went wrong.');
        });
    };
    /**
     * Initialization of component.
     */
    ClientsListComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientsListComponent.prototype.setClient = function (clientid) {
        this.clientid = clientid;
    };
    /**
     * Deletes a client from clients list.
     * @param id client id.
     */
    ClientsListComponent.prototype.delete = function (id) {
        var _this = this;
        this.logger.info("---delete()---");
        this.restService.delete(id).subscribe(function (res) {
            _this.toastr.success('Client deleted!');
            _this.clients.forEach(function (t, i) {
                if (t.id === id) {
                    _this.clients.splice(i, 1);
                }
            });
        });
    };
    return ClientsListComponent;
}());
ClientsListComponent = __decorate([
    core_1.Component({
        selector: 'ubl-clients-list',
        templateUrl: './clients-list.component.html',
        styleUrls: ['./clients-list.component.scss'],
        providers: [rest_service_component_1.RestService]
    }),
    __metadata("design:paramtypes", [rest_service_component_1.RestService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_3.ViewContainerRef,
        router_1.Router, typeof (_b = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _b || Object])
], ClientsListComponent);
exports.ClientsListComponent = ClientsListComponent;
var _a, _b;
//# sourceMappingURL=clients-list.component.js.map