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
var Counter = (function () {
    function Counter(_elementRef) {
        this.element = jQuery(_elementRef.nativeElement);
    }
    Counter.prototype.ngAfterViewInit = function () {
        var elem = this.element, count = this.count, increment = this.increment, interval = this.interval;
        function counter() {
            count = count + increment;
            setTimeout(function () { return counter(); }, interval * 1000);
            elem.html(count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        counter();
    };
    return Counter;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Counter.prototype, "count", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Counter.prototype, "interval", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Counter.prototype, "increment", void 0);
Counter = __decorate([
    core_1.Directive({
        selector: '[counter]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Counter);
exports.Counter = Counter;
//# sourceMappingURL=counter.directive.js.map