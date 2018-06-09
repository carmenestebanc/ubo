import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from '../../../com.acorde.common/base.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { API } from '../../../com.acorde.common/base.api';

export interface IFormControlError {
  key: string;
  code: string;
  error?: any;
}
export interface IFormExtend {
  validator: (control: FormControl) => IFormControlError;
  valueChange: (form: FormComponent, value: any) => void;
}

@Component({
  selector: 'ubl-form-component',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class FormComponent implements OnInit {

  @Input() model: BaseModel;

  _form: FormGroup;

  public constructor() {
  }

  ngOnInit() { }

  private _initForm() {

    let validators = [];
    let rule: any;

    this._form = new FormGroup({});

    this._fieldVisible.forEach((key) => {

      rule = this._getRule(key);
      validators = [];

      if (rule.required) {
        validators.push(Validators.required);
      }

      if (rule.maxLength) {
        validators.push(Validators.maxLength(rule.maxLength));
      }

      if (rule.minLength) {
        validators.push(Validators.minLength(rule.minLength));
      }

      if (rule.type === 'email') {
        validators.push(
          (c: FormControl): IFormControlError => {
            if (c.value && c.value.length > 0) {
              const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
              return EMAIL_REGEXP.test(c.value) ? null : { code: 'error.email', key: key };
            }
            return null;
          }
        );
      }

      if (rule.component.form && rule.component.form.validator) {
        validators.push(rule.component.form.validator);
      }

      if (rule.type === 'select' || rule.type === 'boolean') {
        validators.push(
          (c: FormControl): IFormControlError => {
            if (c.value && c.value.length > 0) {
              if (c.value !== '-1' || (c.value === '-1' && !rule.required)) {
                return null;
              }
              return { code: 'error.select', key: key };
            }
            return null;
          }
        );
      }

      if (rule.required && rule.type === 'list') {
        validators.push(
          (c: FormControl): IFormControlError => {
            if (c.value && c.value.length > 0) {
              return null;
            }
            return { code: 'error.list', key: key };
          }
        );
      }

      const field = new FormControl('', Validators.compose(validators));

      if (rule.value) {
        field.setValue(rule.value);
      }

      if (rule.component.form && rule.component.form.valueChange) {
        field.valueChanges
          .debounceTime(API.WAIT_TIME_SEARCH)
          .subscribe((value: any) => {
            rule.component.form.valueChange(this, value);
          });
      }
      this._form.addControl(key, field);

    });
  }

  get _fieldVisible(): string[] {
    if (this.model && this.model.completed) {
      return Object.keys(this.model.rules).filter(key => {
        return this.model.rules[key].component.save;
      });
    }
    return [];
  }

  private _getRule(key: string): Object {
    return this.model.rules[key] || {};
  }

  private _isType(key: string, ...list: string[]): boolean {
    return list.indexOf(this.model.rules[key].type) >= 0;
  }

}
