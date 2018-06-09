"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var default_rule_1 = require("./default.rule");
var NumberRule = (function (_super) {
    __extends(NumberRule, _super);
    function NumberRule(rules) {
        var _this = _super.call(this, rules) || this;
        _this.rules = rules;
        return _this;
    }
    return NumberRule;
}(default_rule_1.DefaultRule));
exports.NumberRule = NumberRule;
//# sourceMappingURL=number.rule.js.map