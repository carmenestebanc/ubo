import { IDefaultRule, DefaultRule } from './default.rule';

interface ITextRule extends IDefaultRule {
  maxLength?: number;
  minLength?: number;
}

export class TextRule extends DefaultRule {

  public constructor(private rules: ITextRule) {
    super(rules);
  }

  get maxLength(): number {
    return this.attributes.maxLength;
  }
  set maxLength(value: number) {
    this.attributes.maxLength = value;
  }

  get minLength(): number {
    return this.attributes.maxLength;
  }
  set minLength(value: number) {
    this.attributes.minLength = value;
  }

}
