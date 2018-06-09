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
var icons_service_1 = require("./icons.service");
var IconsComponent = (function () {
    function IconsComponent(_iconsService) {
        this._iconsService = _iconsService;
        this.icons = _iconsService.getAll();
    }
    IconsComponent.prototype.changeBg = function (param) {
        this.bgColor = param;
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    core_1.Component({
        selector: 'ubl-icons',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './icons.component.html',
        styleUrls: ['./icons.component.scss'],
        providers: [icons_service_1.IconsService]
    }),
    __metadata("design:paramtypes", [icons_service_1.IconsService])
], IconsComponent);
exports.IconsComponent = IconsComponent;
//# sourceMappingURL=icons.component.js.map