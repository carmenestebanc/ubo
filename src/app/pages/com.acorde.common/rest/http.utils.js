"use strict";
var environment_1 = require("../../../../environments/environment");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var HttpUtils = (function () {
    function HttpUtils(bc) {
        this.bc = bc;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    HttpUtils.prototype._createEndpoint = function (endpoint, isAbosulte) {
        if (isAbosulte === void 0) { isAbosulte = false; }
        return (isAbosulte ? '' : environment_1.environment.apiUrl) + endpoint;
    };
    HttpUtils.prototype.onLoadList = function (endpoint, successCallback, errorCallback, isEndpointAbsolute) {
        if (successCallback === void 0) { successCallback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        if (isEndpointAbsolute === void 0) { isEndpointAbsolute = false; }
        var request = this.doGet(endpoint, isEndpointAbsolute);
        request.subscribe(function (response) {
            if (successCallback) {
                successCallback(response);
            }
        }, function (error) {
            errorCallback(error);
        });
        return request;
    };
    HttpUtils.prototype.doGet = function (endpoint, isEndpointAbsolute) {
        if (isEndpointAbsolute === void 0) { isEndpointAbsolute = false; }
        endpoint = this._createEndpoint(endpoint, isEndpointAbsolute);
        return this.bc.http
            .get(endpoint)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Metodo para manejo de errores
    HttpUtils.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body['error'] || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return HttpUtils;
}());
exports.HttpUtils = HttpUtils;
//# sourceMappingURL=http.utils.js.map