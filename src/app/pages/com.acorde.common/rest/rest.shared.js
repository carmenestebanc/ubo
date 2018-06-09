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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var environment_1 = require("../../../../environments/environment");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var RestShared = (function () {
    function RestShared(http) {
        this.http = http;
    }
    RestShared.prototype.get = function (endpoint) {
        return this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RestShared.prototype.post = function (endpoint, body) {
        return this.http
            .post(environment_1.environment.apiUrl + endpoint, JSON.stringify(body), { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestShared.prototype.put = function (endpoint, body) {
        return this.http
            .put(environment_1.environment.apiUrl + endpoint, JSON.stringify(body), { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestShared.prototype.delete = function (endpoint, body) {
        return this.http
            .delete(environment_1.environment.apiUrl + endpoint, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Object.defineProperty(RestShared.prototype, "_headers", {
        get: function () {
            var headers = new http_1.Headers();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('client_id', environment_1.environment.client_id);
            headers.append('client_secret', environment_1.environment.client_secret);
            if (localStorage.getItem('bearer')) {
                headers.append('Authorization', 'Bearer ' + localStorage.getItem('bearer'));
            }
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    RestShared.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return RestShared;
}());
RestShared = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RestShared);
exports.RestShared = RestShared;
//# sourceMappingURL=rest.shared.js.map