import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from '../../../com.acorde.common/base.model';

@Component({
  selector: 'ubl-table-component',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class TableComponent implements OnInit {

  @Input() public model: BaseModel;

  public constructor() { }

  ngOnInit() { }

  private get _fieldVisible(): string[] {
    if (this.model && this.model.completed) {
      return Object.keys(this.model.rules).filter(key => {
        return this.model.rules[key].visible;
      });
    }
    return [];
  }

  private _getRule(key: string): Object {
    return this.model.rules[key] || {};
  }

  private _refreshData(event: Event) {
    if (event) {
      event.preventDefault();
    }
    this.model.loadData();
  }

  private _isType(key: string, ...list: string[]): boolean {
    return list.indexOf(this.model.rules[key].type) >= 0;
  }

}
