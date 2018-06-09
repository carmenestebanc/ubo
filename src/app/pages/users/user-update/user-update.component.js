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
var user_service_1 = require("../shared/user.service");
var user_model_1 = require("../shared/user.model");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var agent_model_1 = require("../../agents/shared/agent.model");
var agency_service_1 = require("../../agencias/shared/agency.service");
var agent_service_1 = require("../../agents/shared/agent.service");
var role_service_1 = require("../roles/role.service");
var validations_service_1 = require("../../shared-components/form-elements/validations/validations.service");
var core_3 = require("angular2-logger/core");
var errors_service_1 = require("../../shared-components/error/errors.service");
var UserUpdateComponent = (function () {
    function UserUpdateComponent(userService, agencyService, agentService, roleService, route, errors, router, validation, formBuilder, toastr, vcr, logger) {
        this.userService = userService;
        this.agencyService = agencyService;
        this.agentService = agentService;
        this.roleService = roleService;
        this.route = route;
        this.errors = errors;
        this.router = router;
        this.validation = validation;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.vcr = vcr;
        this.logger = logger;
        this.agencyId = "0";
        this.agentId = "0";
        this.agent = new agent_model_1.Agent();
        this._agencies = [];
        this._roles = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.loadRoles();
        this.loadAgencies();
        this.formUser = formBuilder.group({
            id: [null,],
            first_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
            last_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.cellphoneValidator, forms_1.Validators.maxLength(15), this.validation.notNullValidator])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.emailValidator, forms_1.Validators.maxLength(40)])],
            enabled: [false,],
            is_agent: [false, forms_1.Validators.required],
            roles: [null, forms_1.Validators.required],
            agency_id: [null, forms_1.Validators.required]
        });
        this.formUser.get('agency_id').disable();
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAgencies();
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.userService
                .getUser(id)
                .subscribe(function (res) {
                _this.user = new user_model_1.User(res.id, res.first_name, res.last_name, res.email, res.enabled, res.roles[0].id, res.phone, res.password, res.password_confirmation, null, null);
                if (res.agent != null) {
                    _this.user.agency_id = res.agent.agency_id;
                    _this.agencyId = res.agent.agency_id;
                    _this.formUser.get("agency_id").enable();
                    _this.user.is_agent = true;
                    _this.agentId = res.agent.id;
                }
                else {
                    _this.user.agency_id = "No es Agente";
                    _this.user.is_agent = false;
                }
                var form = _this.user;
                form = {
                    "id": _this.user.id,
                    "first_name": _this.user.first_name,
                    "last_name": _this.user.last_name,
                    "email": _this.user.email,
                    "phone": _this.user.phone,
                    "roles": res.roles[0].id,
                    "agency_id": _this.user.agency_id,
                    "enabled": _this.user.enabled,
                    "is_agent": _this.user.is_agent
                };
                _this.formUser.setValue(form);
            });
        });
    };
    UserUpdateComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.user = new user_model_1.User(this.user.id, value.first_name, value.last_name, value.email, value.enabled, value.roles, value.phone, this.user.password, this.user.password_confirmation, value.agency_id, null);
        this.agent.user_id = this.user.id;
        this.agent.agency_id = value.agency_id;
        this.agent.id = this.agentId;
        this.agentService.updateAgent(this.agent).subscribe(function (res) {
        }, function (error) {
            _this.toastr.info('Something went wrong with agent update.');
        });
        this.userService
            .updateUser(this.user)
            .subscribe(function (res) {
            _this.router.navigate(['/pages/users/list']).then(function () {
                _this.toastr.success('User updated successfully!');
            });
        }, function (error) {
            var emailError = _this.errors.emailTakenError(error);
            if (emailError == 0) {
                _this.toastr.info('Something went wrong.');
            }
        });
    };
    /**
     * Carga las agencias en el SelectList.
     */
    UserUpdateComponent.prototype.loadAgencies = function () {
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
    * Loads Roles into a SelectList.
    */
    UserUpdateComponent.prototype.loadRoles = function () {
        var _this = this;
        this.logger.info("---loadRoles()---");
        this.roleService.loadData('roles').subscribe(function (data) {
            _this._roles = data.map(function (field) {
                return {
                    name: field.name,
                    id: field.id,
                    data: field
                };
            });
        });
    };
    return UserUpdateComponent;
}());
UserUpdateComponent = __decorate([
    core_1.Component({
        selector: 'ubl-user-update',
        templateUrl: './user-update.component.html',
        styleUrls: ['./user-update.component.scss'],
        providers: [user_service_1.UserService, agency_service_1.AgencyService, agent_service_1.AgentService,
            role_service_1.RoleService, validations_service_1.ValidationsService, errors_service_1.ErrorsService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        agency_service_1.AgencyService,
        agent_service_1.AgentService,
        role_service_1.RoleService,
        router_1.ActivatedRoute,
        errors_service_1.ErrorsService,
        router_1.Router,
        validations_service_1.ValidationsService,
        forms_1.FormBuilder, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef, typeof (_b = typeof core_3.Logger !== "undefined" && core_3.Logger) === "function" && _b || Object])
], UserUpdateComponent);
exports.UserUpdateComponent = UserUpdateComponent;
var _a, _b;
//# sourceMappingURL=user-update.component.js.map