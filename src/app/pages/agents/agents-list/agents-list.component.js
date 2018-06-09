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
var app_component_1 = require("../../../app.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var agency_service_1 = require("../../agencias/shared/agency.service");
var agent_service_1 = require("../shared/agent.service");
var AgentsListComponent = (function () {
    function AgentsListComponent(agentService, agencyService, toastr, vcr, router) {
        this.agentService = agentService;
        this.agencyService = agencyService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.router = router;
        this.agents = [];
        this.toastr.setRootViewContainerRef(vcr);
    }
    // consulta los agents en el servidor del API usando observables
    AgentsListComponent.prototype.getAgents = function () {
        var _this = this;
        this.agentService.getAgents()
            .subscribe(function (agents) { return _this.agents = agents; });
    };
    Object.defineProperty(AgentsListComponent.prototype, "_permissionsEdit", {
        get: function () {
            return app_component_1.isRole(app_component_1.Role.Administrador);
        },
        enumerable: true,
        configurable: true
    });
    // métodos invocados al inicio
    AgentsListComponent.prototype.ngOnInit = function () {
        this.getAgents();
    };
    AgentsListComponent.prototype.setAgent = function (id, name) {
        this.agentId = id;
        this.agentName = name;
    };
    AgentsListComponent.prototype.delete = function (id, name) {
        var _this = this;
        this.agentService.deleteAgent(id).subscribe(function (res) {
            _this.toastr.success('Agent deleted!');
            // elimina el agent del objeto agent
            _this.agents.forEach(function (t, i) {
                if (t.id === id) {
                    _this.agents.splice(i, 1);
                }
            });
        });
    };
    return AgentsListComponent;
}());
AgentsListComponent = __decorate([
    core_1.Component({
        selector: 'ubl-agents-list',
        templateUrl: './agents-list.component.html',
        styleUrls: ['./agents-list.component.scss'],
        providers: [agent_service_1.AgentService, agency_service_1.AgencyService]
    }),
    __metadata("design:paramtypes", [agent_service_1.AgentService,
        agency_service_1.AgencyService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef,
        router_1.Router])
], AgentsListComponent);
exports.AgentsListComponent = AgentsListComponent;
var _a;
//# sourceMappingURL=agents-list.component.js.map