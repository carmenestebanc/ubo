import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'ubl-list-autocomplete',
  templateUrl: './list-autocomplete.component.html',
  styleUrls: ['./list-autocomplete.component.scss']
})
export class ListAutocompleteComponent implements OnInit {
  @Input() data:Observable<any>;
  @Input() control: FormControl = new FormControl([]);
  @Input() list:Array<Object>;

  country: Array<Object> = [];
  idCountry: Array<any> = [];
  selected: boolean;
  constructor(
    public toastr: ToastsManager
  ) { }

  ngOnInit() {
    if (this.list){
      if (this.list.length > 0) {
        this.list.forEach(value => {
          this.idCountry.push(parseInt(value['pivot']['locationId']));
        });
        this.country = this.list;
        this.control.setValue(this.idCountry);
      }
    }

  }

  _myListFormatter(data: any): string {
    return `(${data['cityIataCode']}) ${data['cityName']} - ${data['countryName']}`;
  }

  _select(item: any,type: boolean) {
    if(type) {
      if(!this.idCountry.includes(item['id']) && item){
        this.country.push(item);
        this.idCountry.push(item['id']);
        this.control.setValue(this.idCountry);
      }else{
        this.toastr.info('The location has already been selected.');
      }
    } else {
      if(this.country.indexOf(item) === 0 && this.country.length === 1) {
        this.country.length = 0;
        this.idCountry.length = 0;
      } else {
        this.country.splice(this.country.indexOf(item),1);
        this.idCountry.splice(this.idCountry.indexOf(item['id']),1);
      }
    }
  }

}
