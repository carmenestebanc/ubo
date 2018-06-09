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
var RoleService = (function () {
    function RoleService(http, logger, toastr) {
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
        this.rolesUrl = environment_1.environment.apiUrl + 'roles';
    }
    RoleService.prototype.get = function (endpoint) {
        var data = this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return data;
    };
    RoleService.prototype.put = function (endpoint, param) {
        var body = JSON.stringify(param);
        return this.http
            .put(environment_1.environment.apiUrl + endpoint, body, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Obtiene todos los Usuarioss en un arreglo de tipo "Role"
    // consulta roles usando observables
    RoleService.prototype.getRoles = function () {
        var roles = this.http
            .get(this.rolesUrl, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return roles;
    };
    // Devuelve un Role específico
    // @params: id
    RoleService.prototype.getRole = function (id) {
        var url = this.rolesUrl + "/" + id;
        var role = this.http
            .get(url, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return role;
    };
    // Crea Role
    // @param
    RoleService.prototype.createRole = function (_parameter) {
        var body = JSON.stringify(_parameter);
        var url = "" + this.rolesUrl;
        this.logger.info(body);
        return this.http
            .post(url, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Actualiza un Role
    // @id
    RoleService.prototype.updateRole = function (param) {
        var body = JSON.stringify(param);
        var url = this.rolesUrl + "/" + param.id;
        return this.http
            .put(url, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Borrar un Role por id
    RoleService.prototype.deleteRole = function (role) {
        var url = this.rolesUrl + "/" + role;
        return this.http
            .delete(url, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Object.defineProperty(RoleService.prototype, "_headers", {
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
    RoleService.prototype.handleError2 = function (error) {
    };
    /**
    * Carga una lista de usuarios.
    */
    RoleService.prototype.loadData = function (endpoint) {
        this.logger.info("---loadData()---");
        return this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers })
            .map(function (response) { return response.json().data || response.json(); })
            .catch(this.handleError);
    };
    /**
     *  Get Roles filtered by params.
     * @param endpoint API end point for agencies.
     * @param Params  Any from the entity.
     */
    RoleService.prototype.loadDataParams = function (endpoint, Params) {
        this.logger.info("Params en loadDataParams: ");
        return this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers, params: Params })
            .map(function (response) { return response.json() || response.json(); })
            .catch(this.handleError);
    };
    return RoleService;
}());
RoleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object])
], RoleService);
exports.RoleService = RoleService;
var _a, _b;
//# sourceMappingURL=role.service.js.map