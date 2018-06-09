import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface IList {
  id:number | string;
  text:string;
  select?:boolean;
  visible?:boolean;
}

@Component({
  selector: 'ubl-select-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class SelectListComponent implements OnInit {

  @Input() data: IList [] = [];
  @Input() control: FormControl = new FormControl([]);


  ngOnInit(): void {}

  _getData(select:boolean = true,input:Input):IList[] {

    if(this.data) {
      return this.data.filter(field=> {
        if(field.select === select) {
          return field.text.toUpperCase().includes(input['value'].toUpperCase() || '');
        }
        return false;
      });
    }
    return [];

  }
  private _loadData() {
    this.control.setValue(this.data.filter(field=>field.select).map((value:IList)=>value.id));
  }

  _select(item) {
    item.select = !item.select;
    this._loadData();
  }

}
