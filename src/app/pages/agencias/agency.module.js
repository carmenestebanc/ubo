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
var agencies_routing_module_1 = require("./agencies-routing.module");
var agency_component_1 = require("./agency.component");
var agency_service_1 = require("./shared/agency.service");
var agencies_add_component_1 = require("./agencias-add/agencies-add.component");
var agencies_list_component_1 = require("./agencies-list/agencies-list.component");
var agency_update_component_1 = require("./agency-update/agency-update.component");
var agency_detail_component_1 = require("./agency-detail/agency-detail.component");
var agencies_list_filter_component_1 = require("../agencias/agencies-list/agencies-list-filter.component");
var AgencyModule = (function () {
    function AgencyModule() {
    }
    return AgencyModule;
}());
AgencyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_datatable_1.DataTableModule,
            agencies_routing_module_1.AgenciesRoutingModule,
            pipes_module_1.PipesModule,
            directives_module_1.DirectivesModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            agency_component_1.AgencyComponent,
            agencies_add_component_1.AgenciesAddComponent,
            agencies_list_component_1.AgenciesListComponent,
            agency_update_component_1.AgencyUpdateComponent,
            agency_detail_component_1.AgencyDetailComponent,
            agencies_list_filter_component_1.AgenciesListFilterComponent
        ],
        providers: [agency_service_1.AgencyService],
    })
], AgencyModule);
exports.AgencyModule = AgencyModule;
//# sourceMappingURL=agency.module.js.map