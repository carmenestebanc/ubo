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
var router_1 = require("@angular/router");
var menu_service_1 = require("./menu.service");
var app_state_1 = require("../../../app.state");
var MenuComponent = (function () {
    function MenuComponent(_elementRef, _router, _activatedRoute, _menuService, _state) {
        var _this = this;
        this._elementRef = _elementRef;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._menuService = _menuService;
        this._state = _state;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this.menuItems = _menuService.getMenuItems();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                if (width <= 768) {
                    _this._state.notifyDataChanged('menu.isCollapsed', true);
                }
                window.scrollTo(0, 0);
            }
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
        this.updateSidebarHeight();
    };
    MenuComponent.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    MenuComponent.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= 768;
    };
    MenuComponent.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    MenuComponent.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    MenuComponent.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    MenuComponent.prototype.updateSidebarHeight = function () {
        this.menuHeight = this._elementRef.nativeElement.children[0].clientHeight - 84;
    };
    MenuComponent.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 60;
    };
    MenuComponent.prototype.collapseMenu = function ($event, item) {
        var link = jQuery($event.currentTarget);
        if (this.isMenuCollapsed) {
            this.isMenuCollapsed = false;
            this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
            if (link.parent().hasClass('sidebar-item-expanded')) {
                return false;
            }
            else {
                link.parent().parent().find('li').removeClass('sidebar-item-expanded');
                link.parent().parent().find('li .sidebar-sublist').slideUp(250);
                link.parent().addClass('sidebar-item-expanded');
                setTimeout(function () {
                    link.next().css('display', 'block');
                }, 250);
                link.next().slideDown(250);
            }
        }
        else {
            if (link.parent().hasClass('sidebar-item-expanded')) {
                link.parent().removeClass('sidebar-item-expanded');
                link.next().slideUp(250);
            }
            else {
                link.parent().parent().find('li').removeClass('sidebar-item-expanded');
                link.parent().parent().find('li .sidebar-sublist').slideUp(250);
                link.parent().addClass('sidebar-item-expanded');
                link.next().slideDown(250);
            }
        }
        return false;
    };
    return MenuComponent;
}());
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuComponent.prototype, "onWindowResize", null);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'ubl-menu',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
        providers: [menu_service_1.MenuService]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        router_1.Router,
        router_1.ActivatedRoute,
        menu_service_1.MenuService,
        app_state_1.AppState])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map