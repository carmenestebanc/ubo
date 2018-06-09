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
var forms_1 = require("@angular/forms");
var base_api_1 = require("../../../com.acorde.common/base.api");
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype._initForm = function () {
        var _this = this;
        var validators = [];
        var rule;
        this._form = new forms_1.FormGroup({});
        this._fieldVisible.forEach(function (key) {
            rule = _this._getRule(key);
            validators = [];
            if (rule.required) {
                validators.push(forms_1.Validators.required);
            }
            if (rule.maxLength) {
                validators.push(forms_1.Validators.maxLength(rule.maxLength));
            }
            if (rule.minLength) {
                validators.push(forms_1.Validators.minLength(rule.minLength));
            }
            if (rule.type === 'email') {
                validators.push(function (c) {
                    if (c.value && c.value.length > 0) {
                        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
                        return EMAIL_REGEXP.test(c.value) ? null : { code: 'error.email', key: key };
                    }
                    return null;
                });
            }
            if (rule.component.form && rule.component.form.validator) {
                validators.push(rule.component.form.validator);
            }
            if (rule.type === 'select' || rule.type === 'boolean') {
                validators.push(function (c) {
                    if (c.value && c.value.length > 0) {
                        if (c.value !== '-1' || (c.value === '-1' && !rule.required)) {
                            return null;
                        }
                        return { code: 'error.select', key: key };
                    }
                    return null;
                });
            }
            if (rule.required && rule.type === 'list') {
                validators.push(function (c) {
                    if (c.value && c.value.length > 0) {
                        return null;
                    }
                    return { code: 'error.list', key: key };
                });
            }
            var field = new forms_1.FormControl('', forms_1.Validators.compose(validators));
            if (rule.value) {
                field.setValue(rule.value);
            }
            if (rule.component.form && rule.component.form.valueChange) {
                field.valueChanges
                    .debounceTime(base_api_1.API.WAIT_TIME_SEARCH)
                    .subscribe(function (value) {
                    rule.component.form.valueChange(_this, value);
                });
            }
            _this._form.addControl(key, field);
        });
    };
    Object.defineProperty(FormComponent.prototype, "_fieldVisible", {
        get: function () {
            var _this = this;
            if (this.model && this.model.completed) {
                return Object.keys(this.model.rules).filter(function (key) {
                    return _this.model.rules[key].component.save;
                });
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype._getRule = function (key) {
        return this.model.rules[key] || {};
    };
    FormComponent.prototype._isType = function (key) {
        var list = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            list[_i - 1] = arguments[_i];
        }
        return list.indexOf(this.model.rules[key].type) >= 0;
    };
    return FormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", base_model_1.BaseModel)
], FormComponent.prototype, "model", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'ubl-form-component',
        templateUrl: './template.html',
        styleUrls: ['./styles.scss']
    }),
    __metadata("design:paramtypes", [])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map