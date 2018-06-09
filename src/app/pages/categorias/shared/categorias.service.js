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
var CategoriasService = (function () {
    function CategoriasService(http, logger, toastr) {
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
        this.proveedoresUrl = environment_1.environment.apiUrl + 'admin/categories';
        this.activesproveedoresUrl = environment_1.environment.apiUrl + 'app/categories';
    }
    // Obtiene todos los Proveedores en un arreglo de tipo "Proveedor"
    // consulta proveedores usando observables
    CategoriasService.prototype.getProveedores = function () {
        var categorias = this.http
            .get(this.proveedoresUrl, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return categorias;
    };
    CategoriasService.prototype.getActivesProveedores = function () {
        var categorias = this.http
            .get(this.activesproveedoresUrl, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return categorias;
    };
    CategoriasService.prototype.getProveedor = function (id) {
        var url = this.proveedoresUrl + "/" + id;
        var categorias = this.http
            .get(url, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        this.logger.info(categorias);
        return categorias;
    };
    // Crea Proveedor
    // @param
    CategoriasService.prototype.crearProveedor = function (param) {
        var body = JSON.stringify(param);
        return this.http
            .post(this.proveedoresUrl, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Actualiza un Proveedor
    // @id
    CategoriasService.prototype.actualizarProveedor = function (param) {
        var body = JSON.stringify(param);
        var url = this.proveedoresUrl + "/" + param.id;
        return this.http
            .put(url, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Borrar un Proveedor por id
    CategoriasService.prototype.borrarProveedor = function (id) {
        var url = this.proveedoresUrl + "/" + id;
        return this.http
            .delete(url, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Object.defineProperty(CategoriasService.prototype, "_headers", {
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
    return CategoriasService;
}());
CategoriasService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object])
], CategoriasService);
exports.CategoriasService = CategoriasService;
var _a, _b;
//# sourceMappingURL=categorias.service.js.map