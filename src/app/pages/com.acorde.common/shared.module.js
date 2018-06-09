"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var modal_service_1 = require("../com.acorde.service/modal/modal.service");
var base_core_1 = require("./base.core");
var category_component_1 = require("../com.acorde.portal/category/category.component");
var select_list_component_1 = require("../com.acorde.ui/component/list-filter/select.list.component");
var list_autocomplete_component_1 = require("../com.acorde.ui/component/list-autocomplete/list-autocomplete.component");
var modal_component_1 = require("../com.acorde.ui/component/modal/modal.component");
var form_component_1 = require("../com.acorde.ui/component/form/form.component");
var table_component_1 = require("../com.acorde.ui/component/table/table.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var image_view_component_1 = require("../com.acorde.ui/component/image-view/image.view.component");
var rest_shared_1 = require("./rest/rest.shared");
var authorizated_guard_1 = require("./guard/authorizated.guard");
var public_guard_1 = require("./guard/public.guard");
var authorizatedComponent_guard_1 = require("./guard/authorizatedComponent.guard");
var auto_complete_1 = require("@ngui/auto-complete");
var AppComponents = [
    table_component_1.TableComponent,
    form_component_1.FormComponent,
    modal_component_1.ModalComponent,
    select_list_component_1.SelectListComponent,
    list_autocomplete_component_1.ListAutocompleteComponent,
    image_view_component_1.ImageViewComponent
];
var PortalComponents = [
    category_component_1.CategoryComponent,
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            auto_complete_1.NguiAutoCompleteModule
        ],
        declarations: [
            PortalComponents,
            AppComponents,
        ],
        providers: [
            base_core_1.BaseCore,
            modal_service_1.ModalService,
            rest_shared_1.RestShared,
            authorizated_guard_1.AuthorizatedGuard,
            public_guard_1.PublicGuard,
            authorizatedComponent_guard_1.AuthorizatedComponentGuard
        ],
        exports: [select_list_component_1.SelectListComponent, image_view_component_1.ImageViewComponent, list_autocomplete_component_1.ListAutocompleteComponent]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map