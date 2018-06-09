"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var text_rule_1 = require("../../com.acorde.common/rule/text.rule");
var number_rule_1 = require("../../com.acorde.common/rule/number.rule");
var base_model_1 = require("../../com.acorde.common/base.model");
var boolean_rule_1 = require("../../com.acorde.common/rule/boolean.rule");
var CategoryModel = (function (_super) {
    __extends(CategoryModel, _super);
    function CategoryModel(bc) {
        return _super.call(this, bc, 'categorias') || this;
    }
    CategoryModel.prototype.initRules = function () {
        this.rules['id'] = new number_rule_1.NumberRule({
            title: 'ID',
            visible: true,
            component: {
                list: true
            }
        });
        this.rules['nombre'] = new text_rule_1.TextRule({
            title: 'Nombre',
            required: true,
            visible: true,
            component: {
                list: true,
                save: true
            }
        });
        this.rules['descripcion'] = new text_rule_1.TextRule({
            title: 'Descripcion',
            visible: true,
            component: {
                list: true,
                save: true
            }
        });
        this.rules['orden'] = new number_rule_1.NumberRule({
            title: 'Orden',
            visible: true,
            component: {
                list: true,
                save: true
            }
        });
        this.rules['activo'] = new boolean_rule_1.BooleanRule({
            title: 'Estado',
            visible: true,
            source: [
                { icon: 'fa fa-check-circle text-blue', text: 'Activo', title: 'Activo', value: true },
                { icon: 'fa fa-times-circle text-red', text: 'Inactivo', title: 'Inactivo', value: false }
            ],
            component: {
                list: true,
                save: true
            }
        });
    };
    CategoryModel.prototype.initViewOptions = function (options) {
        options.title = 'Categorias';
    };
    return CategoryModel;
}(base_model_1.BaseModel));
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=category.model.js.map