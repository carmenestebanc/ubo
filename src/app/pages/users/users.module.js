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
var users_routing_module_1 = require("./users-routing.module");
var users_component_1 = require("./users.component");
var user_service_1 = require("./shared/user.service");
var user_add_component_1 = require("./users-add/user-add.component");
var users_list_component_1 = require("./users-list/users-list.component");
var user_update_component_1 = require("./user-update/user-update.component");
var profile_component_1 = require("../profile/profile.component");
var user_detail_component_1 = require("./user-detail/user-detail.component");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_datatable_1.DataTableModule,
            users_routing_module_1.UsersRoutingModule,
            pipes_module_1.PipesModule,
            directives_module_1.DirectivesModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            users_component_1.UsersComponent,
            user_add_component_1.UsersAddComponent,
            users_list_component_1.UsersListComponent,
            user_update_component_1.UserUpdateComponent,
            profile_component_1.ProfileComponent,
            user_detail_component_1.UserDetailComponent
        ],
        providers: [user_service_1.UserService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map