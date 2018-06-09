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
var user_service_1 = require("../shared/user.service");
var user_model_1 = require("../shared/user.model");
var agent_service_1 = require("../../agents/shared/agent.service");
var agency_service_1 = require("../../agencias/shared/agency.service");
var role_service_1 = require("../roles/role.service");
var validations_service_1 = require("../../shared-components/form-elements/validations/validations.service");
var core_3 = require("angular2-logger/core");
var errors_service_1 = require("../../shared-components/error/errors.service");
var UsersAddComponent = (function () {
    function UsersAddComponent(router, formBuilder, validation, errors, userService, roleService, agencyService, agentService, toastr, vcr, logger) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.validation = validation;
        this.errors = errors;
        this.userService = userService;
        this.roleService = roleService;
        this.agencyService = agencyService;
        this.agentService = agentService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.logger = logger;
        this._agencies = [];
        this._roles = [];
        this.is_agent = false;
        this._data = [];
    }
    UsersAddComponent.prototype.ngOnInit = function () {
        this.toastr.setRootViewContainerRef(this.vcr);
        this.loadAgencies();
        this.loadRoles();
        this.is_agent = false;
        this.form1 = this.formBuilder.group({
            first_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
            last_name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), this.validation.notNullValidator, this.validation.justLettersValidator, this.validation.tooManyWordsValidator])],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.cellphoneValidator, forms_1.Validators.maxLength(15), this.validation.notNullValidator])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.validation.emailValidator, forms_1.Validators.maxLength(40)])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(16)])],
            password_confirmation: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(16)])],
            enabled: [false,],
            is_agent: [false, forms_1.Validators.required],
            roles: [null, forms_1.Validators.required],
            agency_id: [null, forms_1.Validators.required]
        });
        this.form1.get('agency_id').disable();
    };
    /**
     * When user press submit button.
     */
    UsersAddComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!value.password || value.password === '') {
            delete value.password;
            delete value.password_confirmation;
        }
        if ((value.password || '') !== (value.password_confirmation || '')) {
            this.toastr.info('Please check passwords match');
            return;
        }
        if (!this.form1.valid) {
            this.toastr.error('Empty fields!', 'Error!');
        }
        else {
            this.user = new user_model_1.User(null, value.first_name, value.last_name, value.email, value.enabled, value.roles, value.phone, value.password, value.password_confirmation, value.agency_id);
            this.userService
                .createUser(this.user)
                .subscribe(function (res) {
                _this.router.navigate(['/pages/users/list']).then(function () {
                    _this.toastr.success('User created successfully!');
                });
            }, function (error) {
                var emailError = _this.errors.emailTakenError(error);
                if (emailError == 0) {
                    _this.toastr.info('Something went wrong.');
                }
            });
        }
    };
    /**
   * Loads Agencies into a SelectList.
   */
    UsersAddComponent.prototype.loadAgencies = function () {
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
    UsersAddComponent.prototype.loadRoles = function () {
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
    /**
     * Changes the agent enabled.
     */
    UsersAddComponent.prototype.changeIsAgent = function () {
        this.logger.info("---changeIsAgent()---");
        if (this.is_agent == true) {
            this.is_agent = false;
            this.form1.get('agency_id').disable();
        }
        else {
            this.is_agent = true;
            this.form1.get('agency_id').enable();
        }
    };
    /**
     * Gets the value of is_agent.
     */
    UsersAddComponent.prototype.isAgent = function () {
        return this.is_agent;
    };
    UsersAddComponent.prototype.getAgencyId = function () {
        var formAgent = ['agency_id'];
        var value;
        for (var _i = 0, formAgent_1 = formAgent; _i < formAgent_1.length; _i++) {
            var form = formAgent_1[_i];
            if (this.form1.value[form].length) {
                if (form == 'agency_id') {
                    value = this.form1.value[form];
                    return value;
                }
            }
        }
    };
    return UsersAddComponent;
}());
UsersAddComponent = __decorate([
    core_1.Component({
        selector: 'ubl-users-add',
        templateUrl: './user-add.component.html',
        styleUrls: ['./user-add.component.scss'],
        providers: [user_service_1.UserService, agent_service_1.AgentService, agency_service_1.AgencyService,
            role_service_1.RoleService, validations_service_1.ValidationsService, errors_service_1.ErrorsService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        validations_service_1.ValidationsService,
        errors_service_1.ErrorsService,
        user_service_1.UserService,
        role_service_1.RoleService,
        agency_service_1.AgencyService,
        agent_service_1.AgentService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef, typeof (_b = typeof core_3.Logger !== "undefined" && core_3.Logger) === "function" && _b || Object])
], UsersAddComponent);
exports.UsersAddComponent = UsersAddComponent;
var _a, _b;
//# sourceMappingURL=user-add.component.js.map