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
var forms_1 = require("@angular/forms");
var SelectListComponent = (function () {
    function SelectListComponent() {
        this.data = [];
        this.control = new forms_1.FormControl([]);
    }
    SelectListComponent.prototype.ngOnInit = function () { };
    SelectListComponent.prototype._getData = function (select, input) {
        if (select === void 0) { select = true; }
        if (this.data) {
            return this.data.filter(function (field) {
                if (field.select === select) {
                    return field.text.toUpperCase().includes(input['value'].toUpperCase() || '');
                }
                return false;
            });
        }
        return [];
    };
    SelectListComponent.prototype._loadData = function () {
        this.control.setValue(this.data.filter(function (field) { return field.select; }).map(function (value) { return value.id; }));
    };
    SelectListComponent.prototype._select = function (item) {
        item.select = !item.select;
        this._loadData();
    };
    return SelectListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SelectListComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], SelectListComponent.prototype, "control", void 0);
SelectListComponent = __decorate([
    core_1.Component({
        selector: 'ubl-select-list',
        templateUrl: './template.html',
        styleUrls: ['./styles.scss']
    })
], SelectListComponent);
exports.SelectListComponent = SelectListComponent;
//# sourceMappingURL=select.list.component.js.map