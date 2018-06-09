"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var angular2_datatable_1 = require("angular2-datatable");
var pipes_module_1 = require("../../../theme/pipes/pipes.module");
var directives_module_1 = require("../../../theme/directives/directives.module");
var basic_tables_component_1 = require("./basic-tables/basic-tables.component");
var dynamic_tables_component_1 = require("./dynamic-tables/dynamic-tables.component");
exports.routes = [
    { path: '', redirectTo: 'basic-tables', pathMatch: 'full' },
    { path: 'basic-tables', component: basic_tables_component_1.BasicTablesComponent, data: { breadcrumb: 'Basic' } },
    { path: 'dynamic-tables', component: dynamic_tables_component_1.DynamicTablesComponent, data: { breadcrumb: 'Dynamic' } }
];
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_datatable_1.DataTableModule,
            pipes_module_1.PipesModule,
            directives_module_1.DirectivesModule,
            router_1.RouterModule.forChild(exports.routes)
        ],
        declarations: [
            basic_tables_component_1.BasicTablesComponent,
            dynamic_tables_component_1.DynamicTablesComponent
        ]
    })
], TablesModule);
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map