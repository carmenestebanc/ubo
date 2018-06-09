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
var Observable_1 = require("rxjs/Observable");
var forms_1 = require("@angular/forms");
var ng2_toastr_1 = require("ng2-toastr");
var ListAutocompleteComponent = (function () {
    function ListAutocompleteComponent(toastr) {
        this.toastr = toastr;
        this.control = new forms_1.FormControl([]);
        this.country = [];
        this.idCountry = [];
    }
    ListAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.list) {
            if (this.list.length > 0) {
                this.list.forEach(function (value) {
                    _this.idCountry.push(parseInt(value['pivot']['locationId']));
                });
                this.country = this.list;
                this.control.setValue(this.idCountry);
            }
        }
    };
    ListAutocompleteComponent.prototype._myListFormatter = function (data) {
        return "(" + data['cityIataCode'] + ") " + data['cityName'] + " - " + data['countryName'];
    };
    ListAutocompleteComponent.prototype._select = function (item, type) {
        if (type) {
            if (!this.idCountry.includes(item['id']) && item) {
                this.country.push(item);
                this.idCountry.push(item['id']);
                this.control.setValue(this.idCountry);
            }
            else {
                this.toastr.info('The location has already been selected.');
            }
        }
        else {
            if (this.country.indexOf(item) === 0 && this.country.length === 1) {
                this.country.length = 0;
                this.idCountry.length = 0;
            }
            else {
                this.country.splice(this.country.indexOf(item), 1);
                this.idCountry.splice(this.idCountry.indexOf(item['id']), 1);
            }
        }
    };
    return ListAutocompleteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Observable_1.Observable)
], ListAutocompleteComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], ListAutocompleteComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListAutocompleteComponent.prototype, "list", void 0);
ListAutocompleteComponent = __decorate([
    core_1.Component({
        selector: 'ubl-list-autocomplete',
        templateUrl: './list-autocomplete.component.html',
        styleUrls: ['./list-autocomplete.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object])
], ListAutocompleteComponent);
exports.ListAutocompleteComponent = ListAutocompleteComponent;
var _a;
//# sourceMappingURL=list-autocomplete.component.js.map