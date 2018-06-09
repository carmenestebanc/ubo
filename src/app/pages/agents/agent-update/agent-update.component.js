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
var agent_service_1 = require("../shared/agent.service");
var agency_service_1 = require("../../agencias/shared/agency.service");
var user_service_1 = require("../../users/shared/user.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var AgentUpdateComponent = (function () {
    function AgentUpdateComponent(router, formBuilder, userService, agencyService, agentService, toastr, vcr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.agencyService = agencyService;
        this.agentService = agentService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.errMsg = '';
        this.atributos = [];
        this.agencies = [];
        this._agencies = [];
        this.users = [];
        this._users = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.form1 = formBuilder.group({
            id: [null,],
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(255), this.notNullValidator])],
            lastname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(255), this.notNullValidator])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.emailValidator, forms_1.Validators.maxLength(255)])],
        });
    }
    AgentUpdateComponent.prototype.ngOnInit = function () {
        this.toastr.setRootViewContainerRef(this.vcr);
        this.form1 = this.formBuilder.group({
            agency_id: [null, forms_1.Validators.required],
            user_id: [null, forms_1.Validators.required]
        });
    };
    /**
     * When user press update button.
     */
    AgentUpdateComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!this.form1.valid) {
            this.toastr.error('No ha llenado todos los campos!', 'Error!');
        }
        else {
            this.agentService
                .updateAgent(value)
                .subscribe(function (res) {
                _this.agent = res;
                _this.router.navigate(['/pages/agents/list']).then(function () {
                    _this.toastr.success('Agent updated successfully!');
                });
            });
        }
    };
    AgentUpdateComponent.prototype.emailValidator = function (control) {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    AgentUpdateComponent.prototype.notNullValidator = function (control) {
        var checkIt = control.value;
        if (checkIt.trim() == '') {
            return { invalid: true };
        }
    };
    return AgentUpdateComponent;
}());
AgentUpdateComponent = __decorate([
    core_1.Component({
        selector: 'ubl-agent-update',
        templateUrl: './agent-update.component.html',
        styleUrls: ['./agent-update.component.scss'],
        providers: [agency_service_1.AgencyService, user_service_1.UserService, agent_service_1.AgentService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        user_service_1.UserService,
        agency_service_1.AgencyService,
        agent_service_1.AgentService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef])
], AgentUpdateComponent);
exports.AgentUpdateComponent = AgentUpdateComponent;
var _a;
//# sourceMappingURL=agent-update.component.js.map