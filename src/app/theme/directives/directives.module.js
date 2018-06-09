"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var slim_scroll_directive_1 = require("./slim-scroll/slim-scroll.directive");
var widget_directive_1 = require("./widget/widget.directive");
var skycon_directive_1 = require("./skycon/skycon.directive");
var counter_directive_1 = require("./counter/counter.directive");
var live_tile_directive_1 = require("./live-tile/live-tile.directive");
var progress_animate_directive_1 = require("./progress-animate/progress-animate.directive");
var dropzone_directive_1 = require("./dropzone/dropzone.directive");
var uppercase_directive_1 = require("./uppercase/uppercase.directive");
var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            slim_scroll_directive_1.SlimScroll,
            widget_directive_1.Widget,
            skycon_directive_1.Skycon,
            counter_directive_1.Counter,
            live_tile_directive_1.LiveTile,
            progress_animate_directive_1.ProgressAnimate,
            dropzone_directive_1.DropzoneUpload,
            uppercase_directive_1.UpperCase
        ],
        exports: [
            slim_scroll_directive_1.SlimScroll,
            widget_directive_1.Widget,
            skycon_directive_1.Skycon,
            counter_directive_1.Counter,
            live_tile_directive_1.LiveTile,
            progress_animate_directive_1.ProgressAnimate,
            dropzone_directive_1.DropzoneUpload,
            uppercase_directive_1.UpperCase
        ]
    })
], DirectivesModule);
exports.DirectivesModule = DirectivesModule;
//# sourceMappingURL=directives.module.js.map