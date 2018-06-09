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
var base_model_1 = require("../../../com.acorde.common/base.model");
var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(TableComponent.prototype, "_fieldVisible", {
        get: function () {
            var _this = this;
            if (this.model && this.model.completed) {
                return Object.keys(this.model.rules).filter(function (key) {
                    return _this.model.rules[key].visible;
                });
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype._getRule = function (key) {
        return this.model.rules[key] || {};
    };
    TableComponent.prototype._refreshData = function (event) {
        if (event) {
            event.preventDefault();
        }
        this.model.loadData();
    };
    TableComponent.prototype._isType = function (key) {
        var list = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            list[_i - 1] = arguments[_i];
        }
        return list.indexOf(this.model.rules[key].type) >= 0;
    };
    return TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", base_model_1.BaseModel)
], TableComponent.prototype, "model", void 0);
TableComponent = __decorate([
    core_1.Component({
        selector: 'ubl-table-component',
        templateUrl: './template.html',
        styleUrls: ['./styles.scss']
    }),
    __metadata("design:paramtypes", [])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map