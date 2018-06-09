"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular2_datatable_1 = require("angular2-datatable");
var pipes_module_1 = require("../../theme/pipes/pipes.module");
var directives_module_1 = require("../../theme/directives/directives.module");
var http_1 = require("@angular/http");
var categorias_routing_module_1 = require("./categorias-routing.module");
var categorias_component_1 = require("./categorias.component");
var categorias_list_component_1 = require("./categorias-list/categorias-list.component");
var categorias_add_component_1 = require("./categorias-add/categorias-add.component");
var categorias_service_1 = require("./shared/categorias.service");
var categorias_detail_component_1 = require("./categorias-detail/categorias-detail.component");
var categorias_update_component_1 = require("./categorias-update/categorias-update.component");
var CategoriasModule = (function () {
    function CategoriasModule() {
    }
    return CategoriasModule;
}());
CategoriasModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            categorias_routing_module_1.CategoriasRoutingModule,
            angular2_datatable_1.DataTableModule,
            pipes_module_1.PipesModule,
            directives_module_1.DirectivesModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [categorias_component_1.CategoriasComponent, categorias_list_component_1.CategoriasListComponent, categorias_add_component_1.CategoriasAddComponent, categorias_detail_component_1.CategoriasDetailComponent, categorias_update_component_1.CategoriasUpdateComponent],
        providers: [categorias_service_1.CategoriasService],
    })
], CategoriasModule);
exports.CategoriasModule = CategoriasModule;
//# sourceMappingURL=categorias.module.js.map