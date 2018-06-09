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
// import 'skycons/skycons';
require("../../../../assets/skycons/skycons");
var Skycon = (function () {
    function Skycon(el) {
        this.$el = jQuery(el.nativeElement);
    }
    Skycon.prototype.ngOnInit = function () {
        var icons = new Skycons({ 'color': this.color });
        icons.set(this.$el[0], this.weather);
        icons.play();
    };
    return Skycon;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Skycon.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Skycon.prototype, "weather", void 0);
Skycon = __decorate([
    core_1.Directive({
        selector: '[skycon]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Skycon);
exports.Skycon = Skycon;
//# sourceMappingURL=skycon.directive.js.map