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
var CategoriasAddComponent = (function () {
    function CategoriasAddComponent(router, formBuilder, categoriasService, toastr, vcr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.categoriasService = categoriasService;
        this.toastr = toastr;
        this.errors = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.form1 = formBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(255), this.notNullValidator])],
            description: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(255)])],
            ordering: [0, forms_1.Validators.compose([forms_1.Validators.required,
                    function (c) {
                        if (c.value !== null) {
                            return c.value >= 0 ? null : { minlength: { valid: false } };
                        }
                        return null;
                    },
                    function (c) {
                        if (c.value > 9999999999) {
                            return { maxlength: { valid: false } };
                        }
                        return null;
                    }, function (c) {
                        if ((c.value - Math.trunc(c.value)) > 0) {
                            return { decimalnumber: { valid: false } };
                        }
                        return null;
                    },
                ])],
            active: [false,]
        });
    }
    CategoriasAddComponent.prototype.ngOnInit = function () { };
    CategoriasAddComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!this.form1.valid) {
            this.toastr.error('No ha llenado todos los campos!', 'Error!');
        }
        else {
            this.categoriasService
                .crearProveedor(value)
                .subscribe(function (res) {
                _this.router.navigate(['/pages/categories/list']).then(function () {
                    _this.toastr.success('Category created!');
                });
            });
        }
    };
    CategoriasAddComponent.prototype.send = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!this.form1.valid) {
            return;
        }
        else {
            this.form = {
                nombreRazonSocial: this.nombreRazonSocial,
                descripcionRazonSocial: this.descripcionRazonSocial,
                rifRazonSocial: this.rifRazonSocial,
                telefono1: this.telefono1,
                telefono2: this.telefono2,
                direccion: this.direccion,
                activo: this.activo,
            };
            if (value.activo) {
                value.activo = 1;
            }
            else {
                value.activo = 0;
            }
            //value.created_at = new Date();
            value.updated_by = "";
            value.updated_by = "";
            this.categoriasService
                .crearProveedor(value)
                .subscribe(
            //result => this.proveedor = result,  
            function (res) {
                /*    this.router.navigate(['/pages/providers/list']);*/
                _this.proveedor = res;
            }, function (error) { return _this.errMsg = error; });
        }
    };
    CategoriasAddComponent.prototype.notNullValidator = function (control) {
        var checkIt = control.value;
        if (checkIt === null || checkIt.trim() == '') {
            return { invalid: true };
        }
    };
    return CategoriasAddComponent;
}());
CategoriasAddComponent = __decorate([
    core_1.Component({
        selector: 'ubl-categorias-add',
        templateUrl: './categorias-add.component.html',
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        categorias_service_1.CategoriasService, typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, core_2.ViewContainerRef])
], CategoriasAddComponent);
exports.CategoriasAddComponent = CategoriasAddComponent;
var _a;
//# sourceMappingURL=categorias-add.component.js.map