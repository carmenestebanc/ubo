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
var shared_module_1 = require("./pages/com.acorde.common/shared.module");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("angular2-google-maps/core");
var app_routing_1 = require("./app.routing");
var app_config_1 = require("./app.config");
var app_component_1 = require("./app.component");
var error_component_1 = require("./pages/shared-components/error/error.component");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var mydatepicker_1 = require("mydatepicker");
var login_service_1 = require("./pages/shared-components/login/login.service");
var environment_1 = require("../environments/environment");
var core_3 = require("angular2-logger/core");
var datetime_picker_1 = require("@ngui/datetime-picker");
var AppModule = (function () {
    function AppModule(logger) {
        this.logger = logger;
        this.logger.level = environment_1.environment.logger;
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            error_component_1.ErrorComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            datetime_picker_1.NguiDatetimePickerModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
            }),
            app_routing_1.routing,
            animations_1.BrowserAnimationsModule,
            mydatepicker_1.MyDatePickerModule,
            shared_module_1.SharedModule,
            ng2_toastr_1.ToastModule.forRoot()
        ],
        providers: [app_config_1.AppConfig, login_service_1.LoginService, core_3.Logger, core_3.Options],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_3.Logger !== "undefined" && core_3.Logger) === "function" && _a || Object])
], AppModule);
exports.AppModule = AppModule;
var _a;
//# sourceMappingURL=app.module.js.map