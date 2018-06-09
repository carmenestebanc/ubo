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
var core_2 = require("angular2-logger/core");
var rest_service_component_1 = require("../../../rest/rest-service.component");
var SharedServicesComponent = (function () {
    /**
     * Shared services component controller.
     */
    function SharedServicesComponent(logger, restService) {
        this.logger = logger;
        this.restService = restService;
        this.agenciesSelect = [];
    }
    /**
     * Load Agencies in select list.
     */
    SharedServicesComponent.prototype.loadAgencies = function (agenciesSelect) {
        this.logger.info("---loadAgencies()---");
        this.restService.setRestUrl("agencies");
        this.restService.loadData('agencies').subscribe(function (data) {
            agenciesSelect = data.map(function (field) {
                console.log(field);
                return {
                    name: field.name,
                    id: field.id,
                    data: field
                };
            });
        });
    };
    return SharedServicesComponent;
}());
SharedServicesComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, rest_service_component_1.RestService])
], SharedServicesComponent);
exports.SharedServicesComponent = SharedServicesComponent;
var _a;
//# sourceMappingURL=shared-services.component.js.map