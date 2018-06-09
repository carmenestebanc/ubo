"use strict";
var Actions = (function () {
    function Actions() {
        this._refs = {};
        this._first = null;
        this.length = 0;
    }
    Actions.prototype.add = function (key, value) {
        var _this = this;
        value.currentView = function (data) {
            return value.views[_this._getState(value, data)];
        };
        this._refs[key] = value;
        this.length++;
        if (this.length === 0) {
            this._first = this._refs[key];
        }
    };
    Actions.prototype._getState = function (value, data) {
        if (typeof value.state === 'number') {
            return value.state;
        }
        else if (typeof value.state === 'function') {
            return value.state(data);
        }
        return 0;
    };
    Actions.prototype._getDisabled = function (value, data, key) {
        if (typeof value.disabled === 'boolean') {
            return value.disabled;
        }
        else if (typeof value.disabled === 'function') {
            return value.disabled(data, key);
        }
        return false;
    };
    Actions.prototype.get = function (key) {
        return this._refs[key] || null;
    };
    Actions.prototype.getFirst = function (data, key) {
        return (this._first && this._getDisabled(this._first, data, key) && this._first.permission) ? this._first : null;
    };
    Actions.prototype.toArray = function (evaluate, data, key) {
        var _this = this;
        var array = [];
        return Object.keys(this._refs).map(function (index) { return _this._refs[index]; }).filter(function (action) {
            return (!evaluate || !_this._getDisabled(action, data, key) && action.permission);
        });
    };
    Object.defineProperty(Actions.prototype, "getAll", {
        get: function () {
            return this._refs;
        },
        enumerable: true,
        configurable: true
    });
    return Actions;
}());
exports.Actions = Actions;
//# sourceMappingURL=actions.controller.js.map