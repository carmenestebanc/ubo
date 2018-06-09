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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("angular2-logger/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/switchMap");
var user_service_1 = require("../shared/user.service");
var agent_service_1 = require("../../agents/shared/agent.service");
var agency_service_1 = require("../../agencias/shared/agency.service");
var UserUtilities = (function () {
    function UserUtilities(usersService, agentService, logger, toastr, agencyService) {
        this.usersService = usersService;
        this.agentService = agentService;
        this.logger = logger;
        this.toastr = toastr;
        this.agencyService = agencyService;
        this.data = [];
        this.agencyName = "Is not an Agent";
    }
    /**
      * Gets the agent with the given user_id.
      */
    UserUtilities.prototype.getAgent = function (paramsAgent) {
        var _this = this;
        this.agentService.loadDataParams('agents', paramsAgent).subscribe(function (response) {
            if (!response['data'].length) {
                _this.toastr.info('No results found');
                return "Error";
            }
            _this.data = response['data'];
            if (_this.data.length > 1) {
                _this.agencyName = "Is not an Agent.";
                return _this.agencyName;
            }
            _this.agencyName = _this.getAgency();
            return _this.agencyName;
        }, function (error) {
            _this.toastr.info('No results found');
            return "Error";
        });
        return;
    };
    /**
     * Gets the name of the agency.
     * first, gets the id of the agency, then
     * searches for the name.
     * The value is setted into a global variable.
     */
    UserUtilities.prototype.getAgency = function () {
        var _this = this;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].user_id == this.userId) {
                this.agencyId = this.data[i].agency_id;
                this.agencyService
                    .getAgency(this.agencyId)
                    .subscribe(function (c) {
                    _this.agencyName = c.name;
                    return _this.agencyName;
                });
            }
        }
        return;
    };
    return UserUtilities;
}());
UserUtilities = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        agent_service_1.AgentService, typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object, agency_service_1.AgencyService])
], UserUtilities);
exports.UserUtilities = UserUtilities;
var _a, _b;
//# sourceMappingURL=user.utilities.js.map