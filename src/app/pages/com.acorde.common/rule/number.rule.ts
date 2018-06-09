import { IDefaultRule, DefaultRule } from './default.rule';

interface INumberRule extends IDefaultRule {
  max?: number;
  min?: number;
  step?: string;
}

export class NumberRule extends DefaultRule {

  public constructor(private rules: INumberRule) {
    super(rules);
  }
}
