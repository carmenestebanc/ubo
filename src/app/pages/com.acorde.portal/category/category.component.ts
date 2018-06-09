import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './category.model';
import { BaseCore } from '../../com.acorde.common/base.core';

@Component({
  selector: 'ubl-category-component',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class CategoryComponent implements OnInit {

  _model: CategoryModel;

  constructor(public bc: BaseCore) { }

  ngOnInit() {
    this._model = new CategoryModel(this.bc);
    this._model.loadData();
  }

}
