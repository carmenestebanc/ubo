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
var ValidationsService = (function () {
    function ValidationsService(logger, toastr) {
        this.logger = logger;
        this.toastr = toastr;
    }
    ValidationsService.prototype.emailValidator = function (control) {
        var emailRegexp = /^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    ValidationsService.prototype.cellphoneValidator = function (control) {
        var cellphone = /^\+\d{1,4} \d{1,3}[-]\d{4,12}$/;
        if (control.value && !cellphone.test(control.value)) {
            return { invalidcellphone: true };
        }
    };
    ValidationsService.prototype.notNullValidator = function (control) {
        var checkIt = control.value;
        if (checkIt.trim() == '') {
            return { invalid: true };
        }
    };
    ValidationsService.prototype.justLettersValidator = function (control) {
        var justLettersRegexp = /^[a-zA-Z\s]*$/;
        if (control.value && !justLettersRegexp.test(control.value)) {
            return { invalidString: true };
        }
    };
    ValidationsService.prototype.tooManyWordsValidator = function (control) {
        if (control.value.split(" ").length > 3) {
            return { tooManyWords: true };
        }
    };
    ValidationsService.prototype.isValidDate = function (control) {
        // First check for the pattern
        var date = new Date().getTime();
        var birth_date = new Date(control.value).getTime();
        var dateYear = new Date().getFullYear();
        var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
        if (control.value && !regex_date.test(control.value)) {
            return { invalidDateFormat: true };
        }
        // Parse the date parts to integers
        var parts = control.value.split("-");
        var day = parseInt(parts[2], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[0], 10);
        // Check the ranges of month and year
        if (control.value && (year < 1000 || year > 3000 || month == 0 || month > 12)) {
            return { invalidDateYearRange: true };
        }
        if (birth_date > date) {
            return { invalidFutureDate: true };
        }
        if (dateYear - year < 18) {
            return { invalidUnderAge: true };
        }
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Adjust for leap years
        if (control.value && (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))) {
            monthLength[1] = 29;
        }
        // Check the range of the day 
        if (control.value && (day < 0 || day >= monthLength[month - 1])) {
            return { invalidDateDayRange: true };
        }
    };
    ValidationsService.prototype.countWordsValidator = function (control) {
        if (control.value.split(" ").length < 2) {
            return { countWords: true };
        }
        if ((control.value.split(" ").length < 3) && (control.value.substr(control.value.length - 1) === " ")) {
            return { countWords: true };
        }
        if (control.value.split(" ").length > 6) {
            return { countWords: true };
        }
    };
    return ValidationsService;
}());
ValidationsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object])
], ValidationsService);
exports.ValidationsService = ValidationsService;
var _a, _b;
//# sourceMappingURL=validations.service.js.map