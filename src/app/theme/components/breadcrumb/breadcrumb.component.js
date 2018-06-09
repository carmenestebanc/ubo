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
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("../../../app.config");
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(_router, _activatedRoute, _appConfig, _title) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._appConfig = _appConfig;
        this._title = _title;
        this.breadcrumbs = [];
        this.config = this._appConfig.config;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this._router.routerState.snapshot.root);
                _this.title = '';
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.title += ' > ' + breadcrumb.name;
                });
                _this._title.setTitle(_this.config.name + _this.title);
            }
        });
    };
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    core_1.Component({
        selector: 'ubl-breadcrumb',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['./breadcrumb.component.scss'],
        templateUrl: './breadcrumb.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        app_config_1.AppConfig,
        platform_browser_1.Title])
], BreadcrumbComponent);
exports.BreadcrumbComponent = BreadcrumbComponent;
// import { Component, ViewEncapsulation } from '@angular/core';
// import { AppState } from "../../../app.state";
// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })
// export class BreadcrumbComponent {
//     public activePageTitle:string = '';
//     constructor(private _state:AppState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }
//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }
//     }
// } 
//# sourceMappingURL=breadcrumb.component.js.map