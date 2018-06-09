"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var directives_module_1 = require("../theme/directives/directives.module");
var pipes_module_1 = require("../theme/pipes/pipes.module");
var http_1 = require("@angular/http");
var auto_complete_1 = require("@ngui/auto-complete");
var pages_routing_1 = require("./pages.routing");
var pages_component_1 = require("./pages.component");
var blank_component_1 = require("./shared-components/blank/blank.component");
var menu_component_1 = require("../theme/components/menu/menu.component");
var navbar_component_1 = require("../theme/components/navbar/navbar.component");
var breadcrumb_component_1 = require("../theme/components/breadcrumb/breadcrumb.component");
var back_top_component_1 = require("../theme/components/back-top/back-top.component");
var search_component_1 = require("./shared-components/search/search.component");
var forms_1 = require("@angular/forms");
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            directives_module_1.DirectivesModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            pipes_module_1.PipesModule,
            pages_routing_1.routing,
            http_1.HttpModule,
            auto_complete_1.NguiAutoCompleteModule
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
        ],
        declarations: [
            pages_component_1.PagesComponent,
            blank_component_1.BlankComponent,
            menu_component_1.MenuComponent,
            navbar_component_1.NavbarComponent,
            breadcrumb_component_1.BreadcrumbComponent,
            back_top_component_1.BackTopComponent,
            search_component_1.SearchComponent
        ],
    })
], PagesModule);
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map