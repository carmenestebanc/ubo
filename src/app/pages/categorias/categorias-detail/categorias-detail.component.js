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
var router_1 = require("@angular/router");
var categorias_service_1 = require("../shared/categorias.service");
require("rxjs/add/operator/switchMap");
var CategoriasDetailComponent = (function () {
    function CategoriasDetailComponent(categoriasService, route, router) {
        this.categoriasService = categoriasService;
        this.route = route;
        this.router = router;
        this.errMsg = '';
        this.atributos = [];
    }
    CategoriasDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            _this.categoriasService
                .getProveedor(id)
                .subscribe(function (c) { return _this.categorias = c; }, function (error) { return _this.errMsg = error; });
        });
    };
    return CategoriasDetailComponent;
}());
CategoriasDetailComponent = __decorate([
    core_1.Component({
        selector: 'ubl-categorias-detail',
        templateUrl: './categorias-detail.component.html',
        styleUrls: ['./categorias-detail.component.scss']
    }),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService,
        router_1.ActivatedRoute,
        router_1.Router])
], CategoriasDetailComponent);
exports.CategoriasDetailComponent = CategoriasDetailComponent;
//# sourceMappingURL=categorias-detail.component.js.map