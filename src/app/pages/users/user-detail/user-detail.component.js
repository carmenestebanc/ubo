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
var user_service_1 = require("../shared/user.service");
require("rxjs/add/operator/switchMap");
var agent_service_1 = require("../../agents/shared/agent.service");
var agency_service_1 = require("../../agencias/shared/agency.service");
var role_service_1 = require("../roles/role.service");
var UserDetailComponent = (function () {
    function UserDetailComponent(usersService, agentService, agencyService, roleService, toastr, route, vcr, router) {
        this.usersService = usersService;
        this.agentService = agentService;
        this.agencyService = agencyService;
        this.roleService = roleService;
        this.toastr = toastr;
        this.route = route;
        this.vcr = vcr;
        this.router = router;
        this.paramsAgent = new URLSearchParams();
        this.data = [];
        this.userRoles = [];
        this.agencyName = "Is not an Agent";
        this.roleName = "";
        this.errMsg = '';
        this.atributos = [];
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var user = params['id'];
            _this.userId = user;
            _this.paramsAgent.set("user_id", user);
            _this.usersService
                .getUser(user)
                .subscribe(function (c) {
                _this.user = c;
                _this.roleName = c.roles[0].name;
            }, function (error) {
                _this.toastr.info('Something went wrong');
            });
        }, function (error) {
            _this.toastr.info('Something went wrong');
        });
        this.getAgent();
    };
    /**
     * Gets the agent with the given user_id.
     */
    UserDetailComponent.prototype.getAgent = function () {
        var _this = this;
        this.agentService.loadDataParams('agents', this.paramsAgent).subscribe(function (response) {
            if (!response['data'].length) {
                _this.toastr.info('No results found');
            }
            _this.data = response['data'];
            if (_this.data.length > 1) {
                _this.agencyName = "Is not an Agent.";
            }
            _this.getAgency();
        }, function (error) {
            _this.toastr.info('No results found');
        });
    };
    /**
     * Gets the name of the agency.
     * first, gets the id of the agency, then
     * searches for the name.
     * The value is setted into a global variable.
     */
    UserDetailComponent.prototype.getAgency = function () {
        var _this = this;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].user_id == this.userId) {
                this.agencyId = this.data[i].agency_id;
                this.agencyService
                    .getAgency(this.agencyId)
                    .subscribe(function (c) {
                    _this.agencyName = c.name;
                }, function (error) {
                    _this.toastr.info('No results found');
                });
            }
        }
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        selector: 'ubl-user-detail',
        templateUrl: './user-detail.component.html',
        styleUrls: ['./user-detail.component.scss'],
        providers: [agent_service_1.AgentService, agency_service_1.AgencyService, user_service_1.UserService, role_service_1.RoleService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        agent_service_1.AgentService,
        agency_service_1.AgencyService,
        role_service_1.RoleService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, router_1.ActivatedRoute,
        core_1.ViewContainerRef,
        router_1.Router])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
var _a;
//# sourceMappingURL=user-detail.component.js.map