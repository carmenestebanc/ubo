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
var app_state_1 = require("../../../app.state");
var NavbarComponent = (function () {
    function NavbarComponent(_state, router) {
        var _this = this;
        this._state = _state;
        this.router = router;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        if (localStorage.getItem('bearer')) {
            this.currentUser = localStorage.getItem('bearer');
        }
    }
    NavbarComponent.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    NavbarComponent.prototype._logout = function (event) {
        if (event) {
            event.preventDefault();
        }
        localStorage.removeItem('bearer');
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype._goPage = function (url) {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'ubl-navbar',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
    }),
    __metadata("design:paramtypes", [app_state_1.AppState, router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map