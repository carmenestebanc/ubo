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
var agent_service_1 = require("../shared/agent.service");
var user_service_1 = require("../../users/shared/user.service");
var agency_service_1 = require("../../agencias/shared/agency.service");
var core_3 = require("angular2-logger/core");
var AgentsAddComponent = (function () {
    function AgentsAddComponent(router, formBuilder, userService, agencyService, agentService, logger, toastr, vcr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.agencyService = agencyService;
        this.agentService = agentService;
        this.logger = logger;
        this.toastr = toastr;
        this.vcr = vcr;
        this.agencies = [];
        this._agencies = [];
        this.users = [];
        this._users = [];
        this.errors = [];
    }
    AgentsAddComponent.prototype.ngOnInit = function () {
        this.toastr.setRootViewContainerRef(this.vcr);
        this.form1 = this.formBuilder.group({
            agency_id: [null, forms_1.Validators.required],
            user_id: [null, forms_1.Validators.required]
        });
    };
    /**
     * When user press add button.
     */
    AgentsAddComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!this.form1.valid) {
            this.toastr.error('No ha llenado todos los campos!', 'Error!');
        }
        else {
            this.agentService
                .createAgent(value)
                .subscribe(function (res) {
                _this.agent1 = res;
                _this.router.navigate(['/pages/agents/list']).then(function () {
                    _this.toastr.success('Agent created successfully!');
                });
            });
        }
    };
    /**
     *Loads Agencies into a SelectList.
     */
    AgentsAddComponent.prototype._loadAgencies = function () {
        var _this = this;
        this.logger.info("---loadAgencies()---");
        this.agencyService.loadData('agencies').subscribe(function (data) {
            _this._agencies = data.map(function (field) {
                return {
                    name: field.name,
                    id: field.id,
                    data: field
                };
            });
        });
    };
    /**
     *Loads Users into a SelectList.
     */
    AgentsAddComponent.prototype._loadUsers = function () {
        var _this = this;
        this.logger.info("---loadUsers()---");
        this.userService.loadData('users').subscribe(function (data) {
            _this._users = data.map(function (field) {
                return {
                    name: field.first_name,
                    id: field.id,
                    data: field
                };
            });
        });
    };
    AgentsAddComponent.prototype.emailValidator = function (control) {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    AgentsAddComponent.prototype.notNullValidator = function (control) {
        var checkIt = control.value;
        if (checkIt === null || checkIt.trim() == '') {
            return { invalid: true };
        }
    };
    return AgentsAddComponent;
}());
AgentsAddComponent = __decorate([
    core_1.Component({
        selector: 'ubl-users-add',
        templateUrl: './agent-add.component.html',
        styleUrls: ['./agent-add.component.scss'],
        providers: [agency_service_1.AgencyService, user_service_1.UserService, agent_service_1.AgentService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        user_service_1.UserService,
        agency_service_1.AgencyService,
        agent_service_1.AgentService, typeof (_a = typeof core_3.Logger !== "undefined" && core_3.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object, core_2.ViewContainerRef])
], AgentsAddComponent);
exports.AgentsAddComponent = AgentsAddComponent;
var _a, _b;
//# sourceMappingURL=agent-add.component.js.map