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
var login_component_1 = require("../login/login.component");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var login_service_1 = require("../login.service");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RecoverComponent = (function () {
    function RecoverComponent(_router, _fb, _rest, _toastr, _vcr) {
        this._router = _router;
        this._fb = _fb;
        this._rest = _rest;
        this._toastr = _toastr;
        this._vcr = _vcr;
        this._headerTitle = 'title default';
        this._step = 'init';
        this._findData = false;
        this._toastr.setRootViewContainerRef(_vcr);
    }
    RecoverComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    RecoverComponent.prototype.initForm = function () {
        this._form = this._fb.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, login_component_1.emailValidator])],
            tipo: ['token', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this._formToken = this._fb.group({
            email: [],
            token_recovery: ['', forms_1.Validators.required],
        });
    };
    RecoverComponent.prototype._returnLogin = function (event) {
        if (event) {
            event.preventDefault();
        }
        this._router.navigate(['/login']);
    };
    RecoverComponent.prototype._onSubmitStep1 = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this._findData = true;
        this._rest.post('admin/recovery', this._form.value).subscribe(function (response) {
            _this._viewResponse(response);
        }, function (error) {
            var msg = JSON.parse(error).message;
            _this._findData = false;
            _this._toastr.error(msg, 'Ha ocurrido un error');
        });
    };
    RecoverComponent.prototype._onSubmitRecover = function (event, value, endpoint) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this._findData = true;
        value['email'] = this._form.value.email;
        this._rest.post(endpoint, value).subscribe(function (response) {
            _this._viewResponse(response);
            if (!response.error) {
                setTimeout(function () {
                    _this._router.navigate(['/login']);
                }, 1000);
            }
        }, function (error) {
            var msg = JSON.parse(error).message;
            _this._toastr.error(msg, 'Ocurrio un error');
            _this._findData = false;
        });
    };
    RecoverComponent.prototype._viewResponse = function (response) {
        this._findData = false;
        if (response.error) {
            this._toastr.warning('Ha ocurrido un error', response.message);
            return;
        }
        if (response.message) {
            this._toastr.info(response.message);
        }
        this._step = this._form.value.tipo;
    };
    return RecoverComponent;
}());
RecoverComponent = __decorate([
    core_1.Component({
        selector: 'ubl-recover',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './template.html',
        styleUrls: ['./styles.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        login_service_1.LoginService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_1.ViewContainerRef])
], RecoverComponent);
exports.RecoverComponent = RecoverComponent;
var _a;
//# sourceMappingURL=recover.component.js.map