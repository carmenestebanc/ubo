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
var environment_1 = require("../../environments/environment");
var RestService = (function () {
    function RestService(http, logger, toastr) {
        var _this = this;
        this.http = http;
        this.logger = logger;
        this.toastr = toastr;
        this.data = {};
        // Metodo para manejo de errores
        this.handleError = function (error) {
            _this.logger.error(error);
            _this.toastr.error("Please try again.");
            return Observable_1.Observable.throw(error);
        };
    }
    RestService.prototype.setRestUrl = function (endPoint) {
        this.restUrl = environment_1.environment.apiUrl + endPoint;
    };
    RestService.prototype.get = function (endpoint) {
        var data = this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return data;
    };
    RestService.prototype.put = function (endpoint, param) {
        var body = JSON.stringify(param);
        return this.http
            .put(environment_1.environment.apiUrl + endpoint, body, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
     *  Get Object filtered by params.
     */
    RestService.prototype.getList = function () {
        var list = this.http
            .get(this.restUrl, { headers: this._headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
        return list;
    };
    // Obtiene todos los agencies en un arreglo de tipo "Agency"
    // consulta agencies usando observables
    /*getAgencies(): Observable<Agency[]> {
       this.logger.info("AgencyService---getAgencies()---");
       const agencies = this.http
        .get(this.restUrl,{ headers: this._headers })
         .map(response => response.json().data as Agency[])
        .catch(this.handleError);
      return agencies;
    }
  
     // Obtiene todos los agencies en un arreglo de tipo "Agencies"
    // consulta agencies usando observables
  
    getAgenciesForName(): Observable<Agencies> {
      const agencies = this.http
       .get(this.restUrl,{ headers: this._headers })
        .map(response => response.json().data as Agencies)
       .catch(this.handleError);
     return agencies;
   }
  
    // Devuelve un Agency específico
    // @params: id
    getAgency(id: string): Observable<Agency> {
      const url = `${this.restUrl}/${id}`;
      const agency = this.http
        .get(url, { headers: this._headers })
        .map(response => response.json().data as Agency)
        .catch(this.handleError);
      return agency;
    }*/
    // Crea Agency
    // @param
    RestService.prototype.create = function (param) {
        this.logger.info(param);
        var body = JSON.stringify(param);
        var url = "" + this.restUrl;
        return this.http
            .post(url, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Actualiza un Agency
    // @id
    RestService.prototype.update = function (param) {
        this.logger.info(param);
        var body = JSON.stringify(param);
        var url = this.restUrl + "/" + param.id;
        return this.http
            .put(url, body, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Deletes an object by id number.
     */
    RestService.prototype.delete = function (object) {
        this.logger.info("---delete()--- " + object);
        var url = this.restUrl + "/" + object;
        return this.http
            .delete(url, { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    Object.defineProperty(RestService.prototype, "_headers", {
        /**
         * Returns http requests headers.
         */
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
    RestService.prototype.handleError2 = function (error) {
    };
    /**
     * Carga una lista de agencias.
     */
    RestService.prototype.loadData = function (endpoint) {
        this.logger.info("---loadData()---");
        return this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers })
            .map(function (response) { return response.json().data || response.json(); })
            .catch(this.handleError);
    };
    /**
     *  Get Object filtered by params.
     * @param endpoint API end point for object.
     * @param Params  Parameters.
     */
    RestService.prototype.loadDataByParams = function (endpoint, Params) {
        this.logger.info("Params en loadDataByParams: ");
        return this.http
            .get(environment_1.environment.apiUrl + endpoint, { headers: this._headers, params: Params })
            .map(function (response) { return response.json() || response.json(); })
            .catch(this.handleError);
    };
    return RestService;
}());
RestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, typeof (_a = typeof core_2.Logger !== "undefined" && core_2.Logger) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object])
], RestService);
exports.RestService = RestService;
var _a, _b;
//# sourceMappingURL=rest-service.component.js.map