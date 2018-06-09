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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("angular2-logger/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var environment_1 = require("../../../../environments/environment");
var ClientService = (function () {
    function ClientService(http, logger, toastr) {
        var _this = this;
        this.http = http;
        this.logger = logger;
        this.toastr = toastr;
        // Metodo para manejo de errores
        this.handleError = function (error) {
            _this.logger.error(error);
            _this.toastr.error("Please try again.");
            return Observable_1.Observable.throw(error);
        };
        this.clientUrl = environment_1.environment.apiUrl + 'clients';
    }
    ClientService.prototype.get = function (endpoint) {
        var data = this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return data;
    };
    ClientService.prototype.put = function (endpoint, param) {
        var body = JSON.stringify(param);
        return this.http
            .put(environment_1.environment.apiUrl + endpoint, body, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Obtiene todos los clients en un arreglo de tipo "Client"
    // consulta clients usando observables
    ClientService.prototype.getClients = function () {
        var clients = this.http
            .get(this.clientUrl, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return clients;
    };
    // Devuelve un Client específico
    // @params: id
    ClientService.prototype.getClient = function (id) {
        var url = this.clientUrl + "/" + id;
        var client = this.http
            .get(url, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return client;
    };
    // Crea Client
    // @param
    ClientService.prototype.createClient = function (param) {
        var body = JSON.stringify(param);
        var url = "" + this.clientUrl;
        return this.http
            .post(url, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Actualiza un Client
    // @id
    ClientService.prototype.updateClient = function (param) {
        var body = JSON.stringify(param);
        var url = this.clientUrl + "/" + param.id;
        return this.http
            .put(url, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Borrar un Client por id
    ClientService.prototype.deleteClient = function (client) {
        var url = this.clientUrl + "/" + client;
        return this.http
            .delete(url, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Object.defineProperty(ClientService.prototype, "_headers", {
        // devuelve las cabeceras de la solicitud http
        get: function () {
            var headers = new http_1.Headers();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('client-id', environment_1.environment.client_id);
            headers.append('client-secret', environment_1.environment.client_secret);
            if (localStorage.getItem('bearer')) {
                headers.append('Authorization', 'Bearer ' + localStorage.getItem('bearer'));
            }
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    ClientService.prototype.handleError2 = function (error) {
    };
    return ClientService;
}());
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object])
], ClientService);
exports.ClientService = ClientService;
var _a, _b;
//# sourceMappingURL=client.service.js.map