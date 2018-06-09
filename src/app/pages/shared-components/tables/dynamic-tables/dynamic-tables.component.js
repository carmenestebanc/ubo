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
var dynamic_tables_service_1 = require("./dynamic-tables.service");
var DynamicTablesComponent = (function () {
    function DynamicTablesComponent(_dynamicTablesService) {
        this._dynamicTablesService = _dynamicTablesService;
        this.data = _dynamicTablesService.getAll();
    }
    return DynamicTablesComponent;
}());
DynamicTablesComponent = __decorate([
    core_1.Component({
        selector: 'ubl-dynamic-tables',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './dynamic-tables.component.html',
        styleUrls: ['./dynamic-tables.component.scss'],
        providers: [dynamic_tables_service_1.DynamicTablesService]
    }),
    __metadata("design:paramtypes", [dynamic_tables_service_1.DynamicTablesService])
], DynamicTablesComponent);
exports.DynamicTablesComponent = DynamicTablesComponent;
//# sourceMappingURL=dynamic-tables.component.js.map