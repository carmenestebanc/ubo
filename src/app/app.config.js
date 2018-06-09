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
var app_color_1 = require("./app.color");
require("sass-to-js/js/src/sass-to-js.js");
var AppConfig = (function () {
    function AppConfig() {
        this.sassVariables = this.getSassVariables();
        this.config = {
            name: 'USBLICK',
            title: 'Platform form Travel Agencies',
            version: '1.0.1',
            colors: {
                main: this.sassVariables['main-color'],
                default: this.sassVariables['default-color'],
                dark: this.sassVariables['dark-color'],
                primary: this.sassVariables['primary-color'],
                info: this.sassVariables['info-color'],
                success: this.sassVariables['success-color'],
                warning: this.sassVariables['warning-color'],
                danger: this.sassVariables['danger-color'],
                sidebarBgColor: this.sassVariables['sidebar-bg-color'],
                gray: this.sassVariables['gray'],
                grayLight: this.sassVariables['gray-light']
            }
        };
    }
    AppConfig.prototype.getSassVariables = function () {
        var variables = jQuery('body').sassToJs({ pseudoEl: '::after', cssProperty: 'content' });
        return variables;
    };
    AppConfig.prototype.rgba = function (color, opacity) {
        if (color.indexOf('#') >= 0) {
            if (color.slice(1).length == 3) {
                color = '#' + color.slice(1) + '' + color.slice(1);
            }
            return new app_color_1.Color(new app_color_1.HEX(color)).setAlpha(opacity).toString();
        }
        else {
            console.log('incorrect color: ' + color);
            return 'rgba(255,255,255,0.7)';
        }
    };
    return AppConfig;
}());
AppConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppConfig);
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map