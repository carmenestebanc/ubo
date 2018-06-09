import { TextRule } from '../../com.acorde.common/rule/text.rule';
import { NumberRule } from '../../com.acorde.common/rule/number.rule';
import { BaseModel, IViewOptionsModel } from '../../com.acorde.common/base.model';
import { BaseCore } from '../../com.acorde.common/base.core';
import { BooleanRule } from '../../com.acorde.common/rule/boolean.rule';

export class CategoryModel extends BaseModel {

  public constructor(bc: BaseCore) {
    super(bc, 'categorias');
  }

  initRules() {
    this.rules['id'] = new NumberRule({
      title: 'ID',
      visible: true,
      component: {
        list: true
      }
    });

    this.rules['nombre'] = new TextRule({
      title: 'Nombre',
      required: true,
      visible: true,
      component: {
        list: true,
        save: true
      }
    });

    this.rules['descripcion'] = new TextRule({
      title: 'Descripcion',
      visible: true,
      component: {
        list: true,
        save: true
      }
    });

    this.rules['orden'] = new NumberRule({
      title: 'Orden',
      visible: true,
      component: {
        list: true,
        save: true
      }
    });

    this.rules['activo'] = new BooleanRule({
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

  }

  initViewOptions(options: IViewOptionsModel) {
    options.title = 'Categorias';
  }

}
