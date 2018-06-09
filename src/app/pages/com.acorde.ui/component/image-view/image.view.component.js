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
var ImageViewComponent = (function () {
    function ImageViewComponent() {
        this._success = false;
        this._images = [];
        this.select = new core_1.EventEmitter();
    }
    ImageViewComponent.prototype.ngOnInit = function () {
        if (this.params.reformat) {
            this._reformatImages();
        }
        this._success = true;
    };
    Object.defineProperty(ImageViewComponent.prototype, "_image", {
        get: function () {
            return this.params.reformat ? this._images : this.params.room;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageViewComponent.prototype, "_imagesInRoom", {
        get: function () {
            if (this.params.room.additionalInfo && this.params.room.additionalInfo.images && this.params.room.additionalInfo.images.length) {
                return this.params.room.additionalInfo.images;
            }
            return [
                {
                    image: '../assets/img/app/hotel_default.png',
                    thumbnail: '../assets/img/app/hotel_default.png'
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    ImageViewComponent.prototype._reformatImages = function () {
        var _this = this;
        this._imagesInRoom.forEach(function (item, i) {
            _this._images.push({
                img: item.image,
                thumb: item.thumbnail,
                visible: !i
            });
        });
    };
    ImageViewComponent.prototype._changeImage = function (event, i) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this._image.filter(function (obj) { return obj.visible; }).shift()['visible'] = false;
        this._image[i].visible = true;
    };
    ImageViewComponent.prototype._select = function ($event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        ;
        this.select.emit(this._image);
        if (this.params.callback) {
            this.params.callback();
        }
    };
    return ImageViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ImageViewComponent.prototype, "params", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ImageViewComponent.prototype, "select", void 0);
ImageViewComponent = __decorate([
    core_1.Component({
        selector: 'ubl-image-view',
        templateUrl: './template.html',
        styleUrls: ['./styles.scss']
    }),
    __metadata("design:paramtypes", [])
], ImageViewComponent);
exports.ImageViewComponent = ImageViewComponent;
//# sourceMappingURL=image.view.component.js.map