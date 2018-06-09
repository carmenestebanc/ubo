"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
        this.lat = 45.421530;
        this.lng = -75.697193;
        this.zoom = 7;
    }
    return GoogleMapsComponent;
}());
GoogleMapsComponent = __decorate([
    core_1.Component({
        selector: 'ubl-google-maps',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './google-maps.component.html',
        styleUrls: ['./google-maps.component.scss']
    })
], GoogleMapsComponent);
exports.GoogleMapsComponent = GoogleMapsComponent;
//# sourceMappingURL=google-maps.component.js.map