interface IActionView {
  title: string;
  icon: string;
  class?: string;
}

export interface IAction<ParamsType> {
  permission: boolean;
  views: IActionView [],
  state: ((data: object, key?: string) => number) | number;
  callback: (data?:object, index?: number) => any;
  currentView?: (data?:object) => IActionView;
  disabled?: ((data: object, key?: string) => boolean) | boolean;
  params?: ParamsType;
}

export class Actions<ParamsType> {
  private _refs: { [key: string]: IAction<ParamsType> };
  private _first: IAction<ParamsType>;
  public length: number;

  public constructor() {
    this._refs = {};
    this._first = null;
    this.length = 0;
  }

  public add(key: string, value: IAction<ParamsType>) {
    value.currentView = (data?:object) => {
        return value.views[this._getState(value,data)];
    };

    this._refs[key] = value;
    this.length++;

    if (this.length === 0) {
      this._first = this._refs[key];
    }
  }

  private _getState(value: IAction<ParamsType>,data?:object):number {
    if (typeof value.state === 'number') {
        return value.state;
    }else if (typeof value.state === 'function') {
      return value.state(data);
    }
    return 0;
  }

  private _getDisabled(value: IAction<ParamsType>,data?:object,key?:string):boolean {
    if (typeof value.disabled === 'boolean') {
        return value.disabled;
    }else if (typeof value.disabled === 'function') {
      return value.disabled(data,key);
    }
    return false;
  }

  public get(key: string):IAction<ParamsType> {
    return this._refs[key] || null;
  }

  public getFirst(data?: object, key?: string): IAction<ParamsType> {
    return (this._first && this._getDisabled(this._first,data,key) && this._first.permission) ? this._first : null;
  }

  public toArray(evaluate?: boolean, data?: object, key?: string): IAction<ParamsType>[] {
    const array: IAction<ParamsType>[] = [];
    return Object.keys(this._refs).map(index=>this._refs[index]).filter((action)=>{
      return (!evaluate || !this._getDisabled(action,data,key) && action.permission);
    });
  }

  public get getAll() {
    return this._refs;
  }
}