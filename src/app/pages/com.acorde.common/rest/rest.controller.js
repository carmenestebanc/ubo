"use strict";
var forms_1 = require("@angular/forms");
var http_utils_1 = require("./http.utils");
var RestController = (function () {
    function RestController(bc, endpoint) {
        this.rest = {
            data: new forms_1.FormControl({})
        };
        this._endpoint = endpoint;
        this.httputils = new http_utils_1.HttpUtils(bc);
    }
    Object.defineProperty(RestController.prototype, "_restParams", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestController.prototype, "_restData", {
        get: function () {
            return this.rest.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestController.prototype, "data", {
        get: function () {
            return this._restData.value.data || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestController.prototype, "subs", {
        get: function () {
            return this.rest.subcribe;
        },
        enumerable: true,
        configurable: true
    });
    RestController.prototype._error = function (error) {
        this.rest.find = false;
        console.log(error);
    };
    ;
    RestController.prototype.loadData = function (offset) {
        var _this = this;
        this.rest.find = true;
        var request = this.httputils.onLoadList(this._endpoint + this._restParams);
        this.rest.subcribe = request;
        request.subscribe(function (response) {
            _this.rest.find = false;
            _this._restData.setValue(response);
        }, function (error) {
            _this._error(error);
        });
        return request;
    };
    ;
    return RestController;
}());
exports.RestController = RestController;
//# sourceMappingURL=rest.controller.js.map