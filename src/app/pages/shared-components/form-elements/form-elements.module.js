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
var directives_module_1 = require("../../../theme/directives/directives.module");
var inputs_component_1 = require("./inputs/inputs.component");
var file_uploader_component_1 = require("./inputs/file-uploader/file-uploader.component");
var image_uploader_component_1 = require("./inputs/image-uploader/image-uploader.component");
var multiple_image_uploader_component_1 = require("./inputs/multiple-image-uploader/multiple-image-uploader.component");
var layouts_component_1 = require("./layouts/layouts.component");
var validations_component_1 = require("./validations/validations.component");
var wizard_component_1 = require("./wizard/wizard.component");
exports.routes = [
    { path: '', redirectTo: 'inputs', pathMatch: 'full' },
    { path: 'inputs', component: inputs_component_1.InputsComponent, data: { breadcrumb: 'Inputs' } },
    { path: 'layouts', component: layouts_component_1.LayoutsComponent, data: { breadcrumb: 'Layouts' } },
    { path: 'validations', component: validations_component_1.ValidationsComponent, data: { breadcrumb: 'Validations' } },
    { path: 'wizard', component: wizard_component_1.WizardComponent, data: { breadcrumb: 'Wizard' } }
];
var FormElementsModule = (function () {
    function FormElementsModule() {
    }
    return FormElementsModule;
}());
FormElementsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            directives_module_1.DirectivesModule,
            router_1.RouterModule.forChild(exports.routes)
        ],
        declarations: [
            inputs_component_1.InputsComponent,
            file_uploader_component_1.FileUploaderComponent,
            image_uploader_component_1.ImageUploaderComponent,
            multiple_image_uploader_component_1.MultipleImageUploaderComponent,
            layouts_component_1.LayoutsComponent,
            validations_component_1.ValidationsComponent,
            wizard_component_1.WizardComponent
        ]
    })
], FormElementsModule);
exports.FormElementsModule = FormElementsModule;
//# sourceMappingURL=form-elements.module.js.map