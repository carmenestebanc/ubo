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
var agent_service_1 = require("../agents/shared/agent.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var timers_1 = require("core-js/library/web/timers");
var ProfileComponent = (function () {
    function ProfileComponent(_router, formBuilder, toastr, vcr, _us) {
        this._router = _router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.vcr = vcr;
        this._us = _us;
        this._form = {
            data: null,
            question: null,
            password: null,
        };
        this._data = {};
        this.toastr.setRootViewContainerRef(this.vcr);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.get('admin/user/datos').subscribe(function (response) {
            _this._data = response;
            _this._form.data.setValue({
                name: _this._data.name,
                lastname: _this._data.lastname,
            });
        }, function (error) {
            _this.toastr.error('Error consulting user information');
        });
        this._initForm();
    };
    ProfileComponent.prototype._initForm = function () {
        var _this = this;
        // PUT /user/datos/{id}
        this._form.data = this.formBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(255)])],
            lastname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(255)])]
        });
        // PUT /user/password/{id}
        this._form.password = this.formBuilder.group({
            oldPassword: [null, forms_1.Validators.compose([forms_1.Validators.minLength(6), forms_1.Validators.maxLength(16), forms_1.Validators.required])],
            password: [null, forms_1.Validators.compose([forms_1.Validators.minLength(6), forms_1.Validators.maxLength(16), forms_1.Validators.required])],
            confirmed: [null, forms_1.Validators.compose([function (c) {
                        var password = (_this._form.password) ? _this._form.password.get('password') : null;
                        if (password && password.valid && c.value === password.value) {
                            return null;
                        }
                        return { confirmed: { valid: false } };
                    }, forms_1.Validators.required])],
        });
    };
    ProfileComponent.prototype._onSubmit = function (_a, type) {
        var _this = this;
        var value = _a.value;
        var endpoint = '';
        switch (type) {
            case 'data':
                endpoint = 'admin/user/datos';
                value.pregunta = this._data.pregunta;
                value.respuesta = this._data.respuesta;
                break;
            default:
                if (value.password !== value.confirmed) {
                    this.toastr.error('Passwords doesn´t match');
                    return;
                }
                endpoint = 'admin/user/password';
                break;
        }
        this._us.put(endpoint, value).subscribe(function (response) {
            timers_1.setTimeout(function () { return _this.toastr.success('User updated', 'Ok'); }, 1000);
            _this._data = response;
            if (response !== null) {
                _this._logout();
            }
        }, function (error) {
            var msg = error.json().message || 'An error occurred while updating user data.';
            _this.toastr.error(msg);
        });
    };
    ProfileComponent.prototype._emailValidator = function (control) {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    ProfileComponent.prototype._logout = function () {
        localStorage.removeItem('bearer');
        this._router.navigate(['/login']);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'ubl-profile',
        templateUrl: './template.html',
        styleUrls: ['./styles.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_1.ViewContainerRef,
        agent_service_1.AgentService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a;
//# sourceMappingURL=profile.component.js.map