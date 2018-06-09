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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var environment_1 = require("../environments/environment");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authorizatedComponent_guard_1 = require("./pages/com.acorde.common/guard/authorizatedComponent.guard");
require("rxjs/add/operator/filter");
var currentRole = 3;
var Role;
(function (Role) {
    Role[Role["Any"] = 0] = "Any";
    Role[Role["Visitante"] = 1] = "Visitante";
    Role[Role["Gestor"] = 2] = "Gestor";
    Role[Role["Administrador"] = 3] = "Administrador";
})(Role = exports.Role || (exports.Role = {}));
;
function isRole() {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    return roles.indexOf(currentRole) > -1;
}
exports.isRole = isRole;
var AppComponent = (function () {
    function AppComponent(_router, _cdr, toastr, vcr, http) {
        this._router = _router;
        this._cdr = _cdr;
        this.toastr = toastr;
        this.vcr = vcr;
        this.http = http;
        this.toastr.setRootViewContainerRef(this.vcr);
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this._cdr.detectChanges();
    };
    AppComponent.prototype.ngOnInit = function () {
        //this._checkToken();
    };
    AppComponent.prototype._checkToken = function () {
        /*if (localStorage.getItem('bearer')) {
         /this.http
            .get(environment.apiUrl + 'admin/user/datos', { headers: this._headers }).subscribe(
              data => {
                currentRole = +data.json().data.role
                this._urlPermit(this._router.routerState.root.children["0"].firstChild);
              },error=>{
                const err = error.json();
                if(err.error === 'Unauthenticated.') {
                  this.toastr.error('Su sesion ha expirado.');
                  localStorage.removeItem('bearer');
                  this._router.navigate(['/login']);
                }
              }
            );
      }*/
    };
    AppComponent.prototype._checkRole = function () {
        /*this.http
          .get(environment.apiUrl + 'admin/user/datos', { headers: this._headers }).subscribe(
            data => {
              currentRole = +data.json().data.role;
              this._urlPermit(this._router.routerState.root.children["0"].firstChild);
            }
          );*/
    };
    Object.defineProperty(AppComponent.prototype, "_headers", {
        get: function () {
            var headers = new http_1.Headers();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('client-id', environment_1.environment.client_id);
            headers.append('client-secret', environment_1.environment.client_secret);
            if (localStorage.getItem('bearer')) {
                headers.append('Authorization', 'Bearer ' + localStorage.getItem('bearer'));
            }
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype._urlPermit = function (event) {
        var component = event.firstChild.firstChild.component['name'];
        if (authorizatedComponent_guard_1.isDeniedComponent(component)) {
            this._router.navigate(['/pages/agencies', {}]);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'ubl-root',
        template: "<router-outlet></router-outlet>",
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        core_1.ChangeDetectorRef, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_1.ViewContainerRef,
        http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=app.component.js.map