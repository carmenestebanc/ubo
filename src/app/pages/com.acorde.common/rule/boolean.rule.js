"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var default_rule_1 = require("./default.rule");
var BooleanRule = (function (_super) {
    __extends(BooleanRule, _super);
    function BooleanRule(rules) {
        var _this = _super.call(this, rules) || this;
        _this.rules = rules;
        return _this;
    }
    Object.defineProperty(BooleanRule.prototype, "source", {
        get: function () {
            return this.attributes.source || [];
        },
        set: function (value) {
            this.attributes.source = value;
        },
        enumerable: true,
        configurable: true
    });
    BooleanRule.prototype.getValue = function (value) {
        if (value === void 0) { value = false; }
        return this.source.filter(function (item) { return item.value === value; }).shift();
    };
    return BooleanRule;
}(default_rule_1.DefaultRule));
exports.BooleanRule = BooleanRule;
//# sourceMappingURL=boolean.rule.js.map