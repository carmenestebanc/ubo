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
var user_model_1 = require("../shared/user.model");
var core_3 = require("angular2-logger/core");
var rest_service_component_1 = require("../../../rest/rest-service.component");
var UsersListComponent = (function () {
    /**
     * Class constructor.
     */
    function UsersListComponent(restService, toastr, vcr, router, logger) {
        this.restService = restService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.router = router;
        this.logger = logger;
        this.users = [];
        this.data = [];
        this.agents = [];
        this.showingAgents = false;
        this.roleName = "";
        this.toastr.setRootViewContainerRef(vcr);
        this.restService.setRestUrl("users");
    }
    /**
     * Gets all users from data base.
     */
    UsersListComponent.prototype.getUsers = function () {
        var _this = this;
        this.logger.info("---getUsers()---");
        this.restService.getList()
            .subscribe(function (res) {
            if (!res.length) {
                _this.toastr.info('No users found');
            }
            else {
                for (var i = 0; i < res.length; i++) {
                    _this.user = new user_model_1.User(res[i].id, res[i].first_name, res[i].last_name, res[i].email, res[i].enabled, res[i].roles[0].name, res[i].phone, null, null, null, false);
                    if (res[i].agent != null) {
                        _this.user.is_agent = true;
                        _this.agents.push(_this.user);
                        _this.agents.sort(function (a, b) {
                            if (a.id > b.id)
                                return -1;
                            if (a.id < b.id)
                                return 1;
                            return 0;
                        });
                    }
                    _this.users.push(_this.user);
                    _this.users.sort(function (a, b) {
                        if (a.id > b.id)
                            return -1;
                        if (a.id < b.id)
                            return 1;
                        return 0;
                    });
                    _this.data = _this.users;
                    _this.data.sort(function (a, b) {
                        if (a.id > b.id)
                            return -1;
                        if (a.id < b.id)
                            return 1;
                        return 0;
                    });
                }
            }
        }, function (error) {
            _this.toastr.info('Something went wrong');
        });
    };
    /**
     * Class initialization.
     */
    UsersListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    /**
     * Set user to delete data.
     */
    UsersListComponent.prototype.setUser = function (id, name) {
        this.userId = id;
        this.userName = name;
    };
    /**
     * Deletes an user from list and updates view.
     */
    UsersListComponent.prototype.delete = function (id, name) {
        var _this = this;
        this.restService.delete(id).subscribe(function (res) {
            _this.toastr.success('User deleted!');
            _this.users.forEach(function (t, i) {
                if (t.id === id) {
                    _this.users.splice(i, 1);
                }
            });
        });
    };
    /**
     * Shows users wether they are agents or not.
     */
    UsersListComponent.prototype.showAllUsers = function () {
        this.data = this.users;
        this.showingAgents = false;
    };
    /**
     * Shows users only if they are agents.
     */
    UsersListComponent.prototype.showOnlyAgents = function () {
        if (this.agents.length == 0) {
            this.toastr.error("There are no agents registered.");
            this.data = [];
        }
        else {
            this.data = this.agents;
            this.showingAgents = true;
        }
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    core_1.Component({
        selector: 'ubl-users-list',
        templateUrl: './users-list.component.html',
        styleUrls: ['./users-list.component.scss'],
        providers: [rest_service_component_1.RestService]
    }),
    __metadata("design:paramtypes", [rest_service_component_1.RestService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef,
        router_1.Router, typeof (_b = typeof core_3.Logger !== "undefined" && core_3.Logger) === "function" && _b || Object])
], UsersListComponent);
exports.UsersListComponent = UsersListComponent;
var _a, _b;
//# sourceMappingURL=users-list.component.js.map