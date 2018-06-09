"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var default_rule_1 = require("./default.rule");
var TextRule = (function (_super) {
    __extends(TextRule, _super);
    function TextRule(rules) {
        var _this = _super.call(this, rules) || this;
        _this.rules = rules;
        return _this;
    }
    Object.defineProperty(TextRule.prototype, "maxLength", {
        get: function () {
            return this.attributes.maxLength;
        },
        set: function (value) {
            this.attributes.maxLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextRule.prototype, "minLength", {
        get: function () {
            return this.attributes.maxLength;
        },
        set: function (value) {
            this.attributes.minLength = value;
        },
        enumerable: true,
        configurable: true
    });
    return TextRule;
}(default_rule_1.DefaultRule));
exports.TextRule = TextRule;
//# sourceMappingURL=text.rule.js.map