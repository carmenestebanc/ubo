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
var core_2 = require("angular2-google-maps/core");
var directives_module_1 = require("../../../theme/directives/directives.module");
var google_maps_component_1 = require("./google-maps/google-maps.component");
var leaflet_maps_component_1 = require("./leaflet-maps/leaflet-maps.component");
var vector_maps_component_1 = require("./vector-maps/vector-maps.component");
exports.routes = [
    { path: '', redirectTo: 'googlemaps', pathMatch: 'full' },
    { path: 'googlemaps', component: google_maps_component_1.GoogleMapsComponent, data: { breadcrumb: 'Google' } },
    { path: 'leafletmaps', component: leaflet_maps_component_1.LeafletMapsComponent, data: { breadcrumb: 'Leaflet' } },
    { path: 'vectormaps', component: vector_maps_component_1.VectorMapsComponent, data: { breadcrumb: 'Vector' } }
];
var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            directives_module_1.DirectivesModule,
            router_1.RouterModule.forChild(exports.routes),
            core_2.AgmCoreModule
        ],
        declarations: [google_maps_component_1.GoogleMapsComponent, leaflet_maps_component_1.LeafletMapsComponent, vector_maps_component_1.VectorMapsComponent]
    })
], MapsModule);
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map