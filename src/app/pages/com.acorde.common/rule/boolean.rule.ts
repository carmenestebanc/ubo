import { IDefaultRule, DefaultRule } from './default.rule';

interface IBooleanRule extends IDefaultRule {
  source: Array<ISource>;
}

interface ISource {
  value: boolean;
  text: string;
  title: string;
  class?: string;
  icon?: string;
}

export class BooleanRule extends DefaultRule {

  public constructor(private rules: IBooleanRule) {
    super(rules);
  }

  public get source(): Array<ISource> {
    return this.attributes.source || [];
  }
  public set source(value: Array<ISource>) {
    this.attributes.source = value;
  }

  public getValue(value: boolean = false): ISource {
    return this.source.filter(item => { return item.value === value; }).shift();
  }
}
