import { RestController } from './rest/rest.controller';
import { BaseCore } from './base.core';
import { Actions } from './actions.controller';

export interface IViewOptionsModel {
  title: string;
  actionsGlobal?:Actions<any>;
}

export abstract class BaseModel extends RestController {
  public rules: Object = {};
  public viewOptions: IViewOptionsModel;

  public completed = false;

  public constructor(bc: BaseCore, endpoint: string, completed = true) {
    super(bc, endpoint);
    this._initModel();
    this.completed = completed;
  }

  abstract initRules();
  abstract initViewOptions(options: IViewOptionsModel);

  private _initModel() {
    this._initViewOptions();
    this._initActionsGlobal();

    this.initRules();
    this.initViewOptions(this.viewOptions);
  }
  private _initActionsGlobal() {
    this.viewOptions.actionsGlobal = new Actions<any>();
    this.viewOptions.actionsGlobal.add('add', {
        permission: true, // TODO: ask permissions
        views: [{title: 'agregar', icon: 'fa fa-plus', class: 'green-text'}],
        callback: (data?, index?) => {
            console.log('test');
        },
        state: 0,
        params: {}
    });
    this.viewOptions.actionsGlobal.add('refresh', {
        permission: true, // TODO: ask permissions
        views: [
            {icon: 'fa fa-refresh', title: 'Refresh', class: 'blue-text'},
            {icon: 'fa fa-refresh fa-spin', title: 'Refreshing', class: 'yellow-base-text'}
        ],
        callback: (data?, index?) => {
            this.loadData();
        },
        state: (data): number => {
            return this.rest.find? 1 : 0;
        },
        params: {}
    });
  }
  private _initViewOptions(){
    this.viewOptions= {
      title: 'default title',
    };
  }


}
