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
var agents_routing_module_1 = require("./agents-routing.module");
var agents_component_1 = require("./agents.component");
var agent_service_1 = require("./shared/agent.service");
var agent_add_component_1 = require("./agents-add/agent-add.component");
var agents_list_component_1 = require("./agents-list/agents-list.component");
var agent_update_component_1 = require("./agent-update/agent-update.component");
var agent_detail_component_1 = require("./agent-detail/agent-detail.component");
var AgentsModule = (function () {
    function AgentsModule() {
    }
    return AgentsModule;
}());
AgentsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_datatable_1.DataTableModule,
            agents_routing_module_1.AgentsRoutingModule,
            pipes_module_1.PipesModule,
            directives_module_1.DirectivesModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            agents_component_1.AgentsComponent,
            agent_add_component_1.AgentsAddComponent,
            agents_list_component_1.AgentsListComponent,
            agent_update_component_1.AgentUpdateComponent,
            agent_detail_component_1.AgentDetailComponent
        ],
        providers: [agent_service_1.AgentService],
    })
], AgentsModule);
exports.AgentsModule = AgentsModule;
//# sourceMappingURL=agents.module.js.map