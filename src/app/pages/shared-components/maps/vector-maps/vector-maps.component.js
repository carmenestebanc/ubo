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
var core_1 = require("@angular/core");
var app_config_1 = require("../../../../app.config");
var vector_maps_service_1 = require("./vector-maps.service");
var VectorMapsComponent = (function () {
    function VectorMapsComponent(_vectorMapsService, _appConfig) {
        this._vectorMapsService = _vectorMapsService;
        this._appConfig = _appConfig;
        this.bubbles = this._vectorMapsService.getBubbles();
        this.arcs = this._vectorMapsService.getArcs();
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
    }
    VectorMapsComponent.prototype.ngAfterViewInit = function () {
        var bubblemap = new Datamap({
            element: document.getElementById("bubble-map"),
            scope: 'world',
            responsive: true,
            fills: {
                defaultFill: this.configFn.rgba(this.config.colors.gray, 0.4),
                danger: this.config.colors.danger
            },
            geographyConfig: {
                borderWidth: 0.7,
                borderColor: this.config.colors.default,
                highlightFillColor: this.config.colors.sidebarBgColor,
                highlightBorderColor: this.config.colors.default,
                highlightBorderOpacity: 0.8,
                highlightBorderWidth: 1
            }
        });
        bubblemap.bubbles(this.bubbles, {
            popupTemplate: function (geo, data) {
                return "<div class='hoverinfo'><b>" + data.city + "</b><br/>" +
                    "Country: <i>" + data.country + "</i>,<br/>" +
                    "Population: <i>" + data.population + "</i>,<br/> " +
                    "Growth rate (2010-2015): <i>" + data.rate + "</i>,<br/>" +
                    "More info: <u>" + decodeURI(data.link) + "</u></div>";
            },
            fillOpacity: 0.7,
            highlightFillColor: this.config.colors.main,
            highlightBorderColor: this.configFn.rgba(this.config.colors.default, 0.7),
            highlightFillOpacity: 0.8,
        });
        d3.selectAll(".datamaps-bubble").on('click', function (city) {
            window.open(city.link);
        });
        jQuery('#bubble-map-widget').on("fullscreened.widgster", function () {
            bubblemap.resize();
        }).on("restored.widgster", function () {
            bubblemap.resize();
        });
        var arcsmap = new Datamap({
            element: document.getElementById("arcs-map"),
            scope: 'usa',
            responsive: true,
            fills: {
                defaultFill: this.configFn.rgba(this.config.colors.gray, 0.4),
                info: this.config.colors.info
            },
            data: {
                'TX': { fillKey: 'info' },
                'FL': { fillKey: 'info' },
                'NC': { fillKey: 'info' },
                'CA': { fillKey: 'info' },
                'NY': { fillKey: 'info' },
                'CO': { fillKey: 'info' }
            },
            geographyConfig: {
                borderWidth: 0.7,
                borderColor: this.config.colors.default,
                highlightFillColor: this.config.colors.sidebarBgColor,
                highlightBorderColor: this.config.colors.default,
                highlightBorderOpacity: 0.8,
                highlightBorderWidth: 1
            }
        });
        arcsmap.arc(this.arcs, { strokeWidth: 1, arcSharpness: 1.4 });
        jQuery('#arcs-map-widget').on("fullscreened.widgster", function () {
            arcsmap.resize();
        }).on("restored.widgster", function () {
            arcsmap.resize();
        });
        window.addEventListener('resize', function () {
            bubblemap.resize();
            arcsmap.resize();
        });
    };
    VectorMapsComponent.prototype.changeBg = function (param) {
        this.bgColor = param;
    };
    return VectorMapsComponent;
}());
VectorMapsComponent = __decorate([
    core_1.Component({
        selector: 'ubl-vector-maps',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './vector-maps.component.html',
        styleUrls: ['./vector-maps.component.scss'],
        providers: [vector_maps_service_1.VectorMapsService]
    }),
    __metadata("design:paramtypes", [vector_maps_service_1.VectorMapsService, app_config_1.AppConfig])
], VectorMapsComponent);
exports.VectorMapsComponent = VectorMapsComponent;
//# sourceMappingURL=vector-maps.component.js.map