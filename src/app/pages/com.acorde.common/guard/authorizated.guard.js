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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var AuthorizatedGuard = (function () {
    function AuthorizatedGuard(_router) {
        this._router = _router;
    }
    AuthorizatedGuard.prototype.canActivate = function (route, state) {
        /* if(!this._isAuthenticated) {
           this._router.navigate(['/login', {}]);
         }*/
        return this._isAuthenticated;
    };
    Object.defineProperty(AuthorizatedGuard.prototype, "_isAuthenticated", {
        get: function () {
            return !!localStorage.getItem('bearer');
        },
        enumerable: true,
        configurable: true
    });
    return AuthorizatedGuard;
}());
AuthorizatedGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthorizatedGuard);
exports.AuthorizatedGuard = AuthorizatedGuard;
//# sourceMappingURL=authorizated.guard.js.map