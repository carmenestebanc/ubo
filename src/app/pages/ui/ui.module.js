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
var directives_module_1 = require("../../theme/directives/directives.module");
var buttons_component_1 = require("./buttons/buttons.component");
var cards_component_1 = require("./cards/cards.component");
var components_component_1 = require("./components/components.component");
var icons_component_1 = require("./icons/icons.component");
var grid_component_1 = require("./grid/grid.component");
var list_group_component_1 = require("./list-group/list-group.component");
var media_objects_component_1 = require("./media-objects/media-objects.component");
var tabs_accordions_component_1 = require("./tabs-accordions/tabs-accordions.component");
var typography_component_1 = require("./typography/typography.component");
exports.routes = [
    { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    { path: 'buttons', component: buttons_component_1.ButtonsComponent, data: { breadcrumb: 'Buttons' } },
    { path: 'cards', component: cards_component_1.CardsComponent, data: { breadcrumb: 'Cards' } },
    { path: 'components', component: components_component_1.ComponentsComponent, data: { breadcrumb: 'Components' } },
    { path: 'icons', component: icons_component_1.IconsComponent, data: { breadcrumb: 'Icons' } },
    { path: 'grid', component: grid_component_1.GridComponent, data: { breadcrumb: 'Grid' } },
    { path: 'list-group', component: list_group_component_1.ListGroupComponent, data: { breadcrumb: 'List Group' } },
    { path: 'media-objects', component: media_objects_component_1.MediaObjectsComponent, data: { breadcrumb: 'Media Objects' } },
    { path: 'tabs-accordions', component: tabs_accordions_component_1.TabsAccordionsComponent, data: { breadcrumb: 'Tabs & Accordions' } },
    { path: 'typography', component: typography_component_1.TypographyComponent, data: { breadcrumb: 'Typography' } }
];
var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            directives_module_1.DirectivesModule,
            router_1.RouterModule.forChild(exports.routes),
        ],
        declarations: [
            buttons_component_1.ButtonsComponent,
            cards_component_1.CardsComponent,
            components_component_1.ComponentsComponent,
            icons_component_1.IconsComponent,
            grid_component_1.GridComponent,
            list_group_component_1.ListGroupComponent,
            media_objects_component_1.MediaObjectsComponent,
            tabs_accordions_component_1.TabsAccordionsComponent,
            typography_component_1.TypographyComponent
        ]
    })
], UiModule);
exports.UiModule = UiModule;
//# sourceMappingURL=ui.module.js.map