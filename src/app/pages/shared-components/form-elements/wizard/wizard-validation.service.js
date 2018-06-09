"use strict";
var WizardValidationService = (function () {
    function WizardValidationService() {
    }
    WizardValidationService.emailValidator = function (control) {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    WizardValidationService.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var passwordConfirmation = group.controls[passwordConfirmationKey];
            if (password.value !== passwordConfirmation.value) {
                return passwordConfirmation.setErrors({ mismatchedPasswords: true });
            }
        };
    };
    WizardValidationService.numberValidator = function (control) {
        var onlyNumberRegexp = /.*[^0-9].*/;
        if (control.value && onlyNumberRegexp.test(control.value)) {
            return { invalidNumber: true };
        }
    };
    return WizardValidationService;
}());
exports.WizardValidationService = WizardValidationService;
//# sourceMappingURL=wizard-validation.service.js.map