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
var common_1 = require("@angular/common");
var app_state_1 = require("../app.state");
var PagesComponent = (function () {
    function PagesComponent(_state, _location) {
        var _this = this;
        this._state = _state;
        this._location = _location;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.getCurrentPageName();
    };
    PagesComponent.prototype.getCurrentPageName = function () {
        var url = this._location.path();
        var hash = (window.location.hash) ? '#' : '';
        setTimeout(function () {
            var subMenu = jQuery('a[href="' + hash + url + '"]').closest("li").closest("ul");
            window.scrollTo(0, 0);
            subMenu.closest("li").addClass("sidebar-item-expanded");
            subMenu.slideDown(250);
        });
    };
    PagesComponent.prototype.hideMenu = function () {
        this._state.notifyDataChanged('menu.isCollapsed', true);
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').style['display'] = 'none';
    };
    return PagesComponent;
}());
PagesComponent = __decorate([
    core_1.Component({
        selector: 'ubl-pages',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './pages.component.html',
        styleUrls: ['./pages.component.scss'],
        providers: [app_state_1.AppState]
    }),
    __metadata("design:paramtypes", [app_state_1.AppState,
        common_1.Location])
], PagesComponent);
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map