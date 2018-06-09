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
var ng2_ckeditor_1 = require("ng2-ckeditor");
var angular2_froala_wysiwyg_1 = require("angular2-froala-wysiwyg");
var ckeditor_component_1 = require("./ckeditor/ckeditor.component");
var froala_component_1 = require("./froala/froala.component");
exports.routes = [
    { path: '', redirectTo: 'ckeditor', pathMatch: 'full' },
    { path: 'ckeditor', component: ckeditor_component_1.CkeditorComponent, data: { breadcrumb: 'Ckeditor' } },
    { path: 'froala-editor', component: froala_component_1.FroalaComponent, data: { breadcrumb: 'Froala Editor' } }
];
var EditorsModule = (function () {
    function EditorsModule() {
    }
    return EditorsModule;
}());
EditorsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_froala_wysiwyg_1.FroalaEditorModule.forRoot(), angular2_froala_wysiwyg_1.FroalaViewModule.forRoot(),
            ng2_ckeditor_1.CKEditorModule,
            router_1.RouterModule.forChild(exports.routes)
        ],
        declarations: [
            ckeditor_component_1.CkeditorComponent,
            froala_component_1.FroalaComponent
        ]
    })
], EditorsModule);
exports.EditorsModule = EditorsModule;
//# sourceMappingURL=editors.module.js.map