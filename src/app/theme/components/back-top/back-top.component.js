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
var BackTopComponent = (function () {
    function BackTopComponent() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BackTopComponent.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BackTopComponent.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BackTopComponent.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    return BackTopComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BackTopComponent.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BackTopComponent.prototype, "showSpeed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BackTopComponent.prototype, "moveSpeed", void 0);
__decorate([
    core_1.ViewChild('backTop'),
    __metadata("design:type", core_1.ElementRef)
], BackTopComponent.prototype, "_selector", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BackTopComponent.prototype, "_onClick", null);
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackTopComponent.prototype, "_onWindowScroll", null);
BackTopComponent = __decorate([
    core_1.Component({
        selector: 'ubl-back-top',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['./back-top.component.scss'],
        template: "\n    <i #backTop class=\"fa fa-angle-up back-to-top\" title=\"Back to Top\"></i>\n  "
    })
], BackTopComponent);
exports.BackTopComponent = BackTopComponent;
//# sourceMappingURL=back-top.component.js.map