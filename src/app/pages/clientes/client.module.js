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
var datetime_picker_1 = require("@ngui/datetime-picker");
var angular2_datatable_1 = require("angular2-datatable");
var pipes_module_1 = require("../../theme/pipes/pipes.module");
var directives_module_1 = require("../../theme/directives/directives.module");
var http_1 = require("@angular/http");
var clients_routing_module_1 = require("./clients-routing.module");
var client_component_1 = require("./client.component");
var client_service_1 = require("./shared/client.service");
var clients_add_component_1 = require("./clients-add/clients-add.component");
var clients_list_component_1 = require("./clients-list/clients-list.component");
var client_update_component_1 = require("./client-update/client-update.component");
var client_detail_component_1 = require("./client-detail/client-detail.component");
datetime_picker_1.NguiDatetime.firstDayOfWeek = 0;
datetime_picker_1.NguiDatetime.weekends = [null, null];
var ClientModule = (function () {
    function ClientModule() {
    }
    return ClientModule;
}());
ClientModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_datatable_1.DataTableModule,
            clients_routing_module_1.ClientsRoutingModule,
            pipes_module_1.PipesModule,
            directives_module_1.DirectivesModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            datetime_picker_1.NguiDatetimePickerModule
        ],
        declarations: [
            client_component_1.ClientComponent,
            clients_add_component_1.ClientsAddComponent,
            clients_list_component_1.ClientsListComponent,
            client_update_component_1.ClientUpdateComponent,
            client_detail_component_1.ClientDetailComponent
        ],
        providers: [client_service_1.ClientService],
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map