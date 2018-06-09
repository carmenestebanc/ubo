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
var app_component_1 = require("../../../app.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var categorias_service_1 = require("../shared/categorias.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var CategoriasListComponent = (function () {
    function CategoriasListComponent(CategoriasService, toastr, vcr, router) {
        this.CategoriasService = CategoriasService;
        this.toastr = toastr;
        this.router = router;
        this.categorias = [];
        this.toastr.setRootViewContainerRef(vcr);
    }
    Object.defineProperty(CategoriasListComponent.prototype, "_permissionsEdit", {
        get: function () {
            return !app_component_1.isRole(app_component_1.Role.Visitante);
        },
        enumerable: true,
        configurable: true
    });
    // consulta los categorias en el servidor del API usando observables
    CategoriasListComponent.prototype.getProveedores = function () {
        var _this = this;
        this.CategoriasService.getProveedores()
            .subscribe(function (categorias) { return _this.categorias = categorias; });
    };
    CategoriasListComponent.prototype.setCategory = function (id) {
        this.categoryId = id;
    };
    // consulta usando Promises
    /*
       getProveedores(): void {
        this.ProveedorService
            .getProveedores()
            .then(proveedores => this.proveedores = proveedores);
      }*/
    // métodos invocados al inicio
    CategoriasListComponent.prototype.ngOnInit = function () {
        this.getProveedores();
    };
    CategoriasListComponent.prototype.delete = function (id) {
        var _this = this;
        this.CategoriasService.borrarProveedor(id).subscribe(function (res) {
            _this.toastr.success('Category deleted.');
            _this.categorias.forEach(function (t, i) {
                if (t.id === id) {
                    _this.categorias.splice(i, 1);
                }
            });
        });
    };
    return CategoriasListComponent;
}());
CategoriasListComponent = __decorate([
    core_1.Component({
        selector: 'ubl-categorias-list',
        templateUrl: './categorias-list.component.html',
        styleUrls: ['./categorias-list.component.scss'],
        providers: [categorias_service_1.CategoriasService]
    }),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef,
        router_1.Router])
], CategoriasListComponent);
exports.CategoriasListComponent = CategoriasListComponent;
var _a;
//# sourceMappingURL=categorias-list.component.js.map