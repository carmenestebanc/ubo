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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("angular2-logger/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var ErrorsService = (function () {
    function ErrorsService(logger, toastr) {
        this.logger = logger;
        this.toastr = toastr;
    }
    ErrorsService.prototype.emailTakenError = function (error) {
        var json = JSON.parse(error._body);
        if (json.errors.email == "The email has already been taken.") {
            this.toastr.error('The email has already been taken.');
            return 1;
        }
        else {
            return 0;
        }
    };
    return ErrorsService;
}());
ErrorsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object])
], ErrorsService);
exports.ErrorsService = ErrorsService;
var _a, _b;
//# sourceMappingURL=errors.service.js.map