"use strict";
var DefaultRule = (function () {
    function DefaultRule(data) {
        this.attributes = {};
        Object.assign(this.attributes, data);
    }
    Object.defineProperty(DefaultRule.prototype, "title", {
        get: function () {
            return this.attributes.title || 'title default';
        },
        set: function (value) {
            this.attributes.title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultRule.prototype, "visible", {
        get: function () {
            return this.attributes.visible;
        },
        set: function (value) {
            this.attributes.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultRule.prototype, "required", {
        get: function () {
            return this.attributes.required;
        },
        set: function (value) {
            this.attributes.required = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultRule.prototype, "component", {
        get: function () {
            return this.attributes.component || {};
        },
        set: function (value) {
            this.attributes.component = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultRule.prototype, "value", {
        get: function () {
            return this.attributes.value;
        },
        set: function (value) {
            this.attributes.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultRule.prototype, "type", {
        get: function () {
            return this.constructor.name.replace('Rule', '').toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    return DefaultRule;
}());
exports.DefaultRule = DefaultRule;
//# sourceMappingURL=default.rule.js.map