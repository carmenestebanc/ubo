import { FormControl } from '@angular/forms';
import { IFormControlError, IFormExtend } from '../../com.acorde.ui/component/form/form.component';

interface IComponents  {
  form?: boolean | IFormExtend;
  save?: boolean | IComponentExtend;
  filter?: boolean | IComponentExtend;
  list?: boolean | IComponentExtend;
}

interface IComponentExtend {
  after: () => void;
  before: () => void;
}

export interface IDefaultRule {
  title: string;
  visible?: boolean;
  required?: boolean;
  component?: IComponents;
  value?: any;
}

export class DefaultRule {

  public attributes: any = {};

  constructor(data: Object) {
    Object.assign(this.attributes, data);
  }

  get title(): string {
    return this.attributes.title || 'title default';
  }
  set title(value: string) {
    this.attributes.title = value;
  }

  get visible(): boolean {
    return this.attributes.visible;
  }
  set visible(value: boolean) {
    this.attributes.visible = value;
  }

  get required(): boolean {
    return this.attributes.required;
  }
  set required(value: boolean) {
    this.attributes.required = value;
  }

  get component(): IComponents {
    return this.attributes.component || {};
  }
  set component(value: IComponents) {
    this.attributes.component = value;
  }

  get value(): any {
    return this.attributes.value;
  }
  set value(value: any) {
    this.attributes.value = value;
  }

  get type(): string {
    return this.constructor.name.replace('Rule', '').toLowerCase();
  }
}
