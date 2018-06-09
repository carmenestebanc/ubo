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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var categorias_service_1 = require("../shared/categorias.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var CategoriasUpdateComponent = (function () {
    function CategoriasUpdateComponent(categoriasService, route, router, formBuilder, toastr, vcr) {
        this.categoriasService = categoriasService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.errMsg = '';
        this.atributos = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.form1 = formBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(255), this.notNullValidator])],
            description: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(255)])],
            ordering: [null, forms_1.Validators.compose([forms_1.Validators.required,
                    function (c) {
                        if (c.value !== null) {
                            return c.value >= 0 ? null : { minlength: { valid: true } };
                        }
                        return null;
                    },
                    function (c) {
                        if (c.value > 9999999999) {
                            return { maxlength: { valid: false } };
                        }
                        return null;
                    }
                ])],
            active: [false,],
            id: [null,],
        });
    }
    CategoriasUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            _this.categoriasService
                .getProveedor(id)
                .subscribe(function (c) {
                _this.categorias = c;
                _this.form1.controls['activo'].setValue(c.active);
            });
        });
    };
    CategoriasUpdateComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.categoriasService
            .actualizarProveedor(value)
            .subscribe(function (res) {
            _this.router.navigate(['/pages/categories/list']).then(function () {
                _this.toastr.success('Category updated succesfully!');
            });
        });
    };
    CategoriasUpdateComponent.prototype.notNullValidator = function (control) {
        var checkIt = control.value;
        if (checkIt === null || checkIt.trim() == '') {
            return { invalid: true };
        }
    };
    return CategoriasUpdateComponent;
}());
CategoriasUpdateComponent = __decorate([
    core_1.Component({
        selector: 'ubl-categorias-update',
        templateUrl: './categorias-update.component.html',
        styleUrls: ['./categorias-update.component.scss']
    }),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService,
        router_1.ActivatedRoute,
        router_1.Router,
        forms_1.FormBuilder, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef])
], CategoriasUpdateComponent);
exports.CategoriasUpdateComponent = CategoriasUpdateComponent;
var _a;
//# sourceMappingURL=categorias-update.component.js.map