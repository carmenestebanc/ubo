"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var appPicture_pipe_1 = require("./appPicture/appPicture.pipe");
var profilePicture_pipe_1 = require("./profilePicture/profilePicture.pipe");
var mail_search_pipe_1 = require("./search/mail-search.pipe");
var search_pipe_1 = require("./search/search.pipe");
var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            appPicture_pipe_1.AppPicturePipe,
            profilePicture_pipe_1.ProfilePicturePipe,
            mail_search_pipe_1.MailSearchPipe,
            search_pipe_1.SearchPipe
        ],
        exports: [
            appPicture_pipe_1.AppPicturePipe,
            profilePicture_pipe_1.ProfilePicturePipe,
            mail_search_pipe_1.MailSearchPipe,
            search_pipe_1.SearchPipe
        ]
    })
], PipesModule);
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map