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
var base_core_1 = require("../../../com.acorde.common/base.core");
var ModalComponent = (function () {
    function ModalComponent(bc, el) {
        this.bc = bc;
        this.el = el;
        this.el.nativeElement.classList.add('not-blur');
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$frame = this.el.nativeElement.firstChild;
        if (!this.config) {
            this.config = this.bc.ms.configs['default'];
        }
        this.bc.ms.onVisible.subscribe(function (value) {
            _this.visible = value;
        });
    };
    Object.defineProperty(ModalComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (value !== this.visible) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.bc.$elements.app.classList.remove('blur-content');
        this.$frame.classList.remove('shown');
        setTimeout(function () {
            _this._visible = false;
            _this.bc.ms.hideCurrentModal();
        }, 500);
    };
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.config = this.bc.ms.configs[this.bc.ms.currentModal] || this.bc.ms.configs['default'];
        this.bc.$elements.app.classList.add('blur-content');
        this._visible = true;
        setTimeout(function () {
            _this.$frame.classList.add('shown');
        }, 100);
    };
    ModalComponent.prototype._onEvent = function (data) {
        this.bc.ms.output = data;
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    core_1.Component({
        selector: 'ubl-modal',
        templateUrl: './template.html',
        styleUrls: ['./styles.scss']
    }),
    __metadata("design:paramtypes", [base_core_1.BaseCore, core_1.ElementRef])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map