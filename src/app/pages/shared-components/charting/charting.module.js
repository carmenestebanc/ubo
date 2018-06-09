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
var ng2_charts_1 = require("ng2-charts");
require("chart.js/dist/Chart.js");
var directives_module_1 = require("../../../theme/directives/directives.module");
var ng2_charts_component_1 = require("./ng2-charts/ng2-charts.component");
exports.routes = [
    { path: '', redirectTo: 'ng2charts', pathMatch: 'full' },
    { path: 'ng2charts', component: ng2_charts_component_1.Ng2ChartsComponent, data: { breadcrumb: 'Ng2 Charts' } }
];
var ChartingModule = (function () {
    function ChartingModule() {
    }
    return ChartingModule;
}());
ChartingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_charts_1.ChartsModule,
            directives_module_1.DirectivesModule,
            router_1.RouterModule.forChild(exports.routes)
        ],
        declarations: [
            ng2_charts_component_1.Ng2ChartsComponent
        ]
    })
], ChartingModule);
exports.ChartingModule = ChartingModule;
//# sourceMappingURL=charting.module.js.map