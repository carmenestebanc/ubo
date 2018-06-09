"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rest_controller_1 = require("./rest/rest.controller");
var actions_controller_1 = require("./actions.controller");
var BaseModel = (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(bc, endpoint, completed) {
        if (completed === void 0) { completed = true; }
        var _this = _super.call(this, bc, endpoint) || this;
        _this.rules = {};
        _this.completed = false;
        _this._initModel();
        _this.completed = completed;
        return _this;
    }
    BaseModel.prototype._initModel = function () {
        this._initViewOptions();
        this._initActionsGlobal();
        this.initRules();
        this.initViewOptions(this.viewOptions);
    };
    BaseModel.prototype._initActionsGlobal = function () {
        var _this = this;
        this.viewOptions.actionsGlobal = new actions_controller_1.Actions();
        this.viewOptions.actionsGlobal.add('add', {
            permission: true,
            views: [{ title: 'agregar', icon: 'fa fa-plus', class: 'green-text' }],
            callback: function (data, index) {
                console.log('test');
            },
            state: 0,
            params: {}
        });
        this.viewOptions.actionsGlobal.add('refresh', {
            permission: true,
            views: [
                { icon: 'fa fa-refresh', title: 'Refresh', class: 'blue-text' },
                { icon: 'fa fa-refresh fa-spin', title: 'Refreshing', class: 'yellow-base-text' }
            ],
            callback: function (data, index) {
                _this.loadData();
            },
            state: function (data) {
                return _this.rest.find ? 1 : 0;
            },
            params: {}
        });
    };
    BaseModel.prototype._initViewOptions = function () {
        this.viewOptions = {
            title: 'default title',
        };
    };
    return BaseModel;
}(rest_controller_1.RestController));
exports.BaseModel = BaseModel;
//# sourceMappingURL=base.model.js.map