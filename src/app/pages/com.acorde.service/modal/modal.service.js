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
var ModalService = (function () {
    function ModalService() {
        this.modalID = 'modal-service';
        this._currentModal = 'none';
        this.onVisible = new core_1.EventEmitter();
        this.initConfigs();
    }
    Object.defineProperty(ModalService.prototype, "currentModal", {
        get: function () {
            return this._currentModal;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ModalService.prototype.show = function (name, params) {
        if (this._currentModal === 'none') {
            this.params = params;
            this._currentModal = name;
            this.onVisible.emit(true);
        }
    };
    ModalService.prototype.hideCurrentModal = function () {
        if (this._currentModal !== 'none') {
            this._currentModal = 'none';
            this.onVisible.emit(false);
            if (this.params.onAfterClose) {
                this.params.onAfterClose(this.output);
            }
        }
    };
    ModalService.prototype.initConfigs = function () {
        var _this = this;
        this.configs = {};
        this.configs['default'] = {
            id: this.modalID,
            size: 'md',
            header: { class: '', title: 'title default' },
            footer: {}
        };
        this.configs['delete'] = {
            id: this.modalID,
            size: 'sm',
            header: { title: 'Eliminar', class: 'red' },
            footer: {
                btn: [
                    {
                        name: 'cancelar', classes: 'btn-default', icon: 'fa fa-ban',
                        call: function () {
                            _this.hideCurrentModal();
                        }
                    },
                    {
                        name: 'Eliminar', classes: 'red', icon: 'fa fa-trash',
                        call: function () {
                            _this.params.model.onDelete(_this.params.model.currentData.id);
                            _this.hideCurrentModal();
                        }
                    }
                ]
            }
        };
        this.configs['save'] = {
            id: this.modalID,
            size: 'lg',
            header: { title: 'Guardar', class: 'green' }
        };
    };
    return ModalService;
}());
ModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ModalService);
exports.ModalService = ModalService;
//# sourceMappingURL=modal.service.js.map