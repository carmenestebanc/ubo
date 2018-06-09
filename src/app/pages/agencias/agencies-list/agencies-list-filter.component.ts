import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";
import { Agencies } from '../shared/agencies.model';
import { Agency } from '../shared/agency.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit, ViewContainerRef, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ValidationsService } from '../../shared-components/form-elements/validations/validations.service';
import { RestService } from '../../../rest/rest-service.component';
import { SharedServicesComponent, ISelect } from '../../shared-components/services/shared-services.component';

@Component({
  selector: 'ubs-filter-enabled',
  templateUrl: './agencies-list-enabled-filter.component.html',
  styleUrls: ['./agencies-list-enabled-filter.component.scss'],
  providers: [ValidationsService, RestService, SharedServicesComponent]
})

/**
 * Agencies list component controller.
 */
export class AgenciesListFilterComponent implements OnInit {
  _status = [
    'Enabled',
    'Disabled',
  ];

  agencies: Agency[] = [];
  agenciesSelect: ISelect[] = [];
  form: FormGroup;
  filterForm : FormGroup;
  searchForm: FormGroup;
  data:any [] = [];
  findData = false;
  successFound = true;
  url:string; 
  agencyid: number;
  total: number; 
  noParameters: boolean = false;

  /**
   * Agencies list component controller.
   */
  constructor(   
    public formBuilder: FormBuilder,
    public toastr: ToastsManager,
    public logger: Logger,
    public vcr: ViewContainerRef,
    public validation: ValidationsService,
    public restService: RestService,
    public sharedServices: SharedServicesComponent
    ) {
        this.toastr.setRootViewContainerRef(vcr);
        this.restService.setRestUrl("agencies");
  }

 /**
  * Class initialization.
  */
  ngOnInit(): void {
    this.getAllAgencies();
    this.initForm();
    //this.loadAgencies();
    // this.sharedServices.loadAgencies(this.agenciesSelect);    
  }

 /**
  * Gets agencies list from data base.
  */
  getAllAgencies() {
    this.restService.getList()
      .subscribe(
        res => {
        this.agencies = res;
        //Fills select list.        
        this.agenciesSelect = this.agencies.map((field: Agency): ISelect => {
          return {
            name:field.name,
            id: field.id,
            data: field
          };
        });  
        }
    );
  }

  /**
   * Forms initialization.
   */
   initForm() {
    this.searchForm = this.formBuilder.group({
      'status': new FormControl('', Validators.compose([Validators.maxLength(25), this.validation.justLettersValidator])),
      'agencyName': new FormControl('', Validators.compose([Validators.maxLength(25)]))
    }, {
      validator: this.noSearchParameters.bind(this)
    });

    this.filterForm = this.formBuilder.group({
      'filterForm': this.searchForm,
    });
}

  /**
   * Load Agencies in select list.
   */
  loadAgencies() {
    this.logger.info("---loadAgencies()---");
    this.agenciesSelect = this.agencies.map((field: Agency): ISelect => {
      return {
        name:field.name,
        id: field.id,
        data: field
      };
    });    
  }

  /**
   * Event triggered when search button is pressed.
   */
  onSubmit(page: string) {
    this.findData = true;
    let params: URLSearchParams = new URLSearchParams();
    let forms = ['agencyName','status'];
    let value;
    for (let form of forms){
      if (this.searchForm.value[form].length) {
        if (form == 'agencyName') {
          value  = this.agenciesSelect.filter(obj => obj.name === this.searchForm.value[form]).map(obj => obj.name).shift();
          params.set("name",value);
        } else {
          value = this.searchForm.value[form];         
          if (value == 'Enabled'){
            value=1;
            params.set(form,value);
          }else {
            if (value == 'Disabled'){
              value=0;
              params.set(form,value);
            }
          }          
        }
      }
    }

    /**
     * Loads agencies after filter.
     */
    this.restService.loadDataByParams('agencies', params).subscribe(
      response=> {
        this.findData = false;
        if(!response['data'].length) {
          this.successFound = false;
          this.toastr.info('No results found');
          this.data = [];               
        }else {
          if (response['data'].length == this.agencies.length) {
            if (response['data'][0].status==params.get('status') || 
                response['data'][0].name==params.get('agencyName')) { 
                this.data = response['data'];
                this.successFound = true;
                this.total = response['total'];
            } else {
                this.successFound = false;
                this.data = [];
                this.toastr.info('No results found');
            }
          } else { 
              this.data = response['data'];
              this.successFound = true;
              this.total = response['total'];
        }
      }
      },error=>{
          this.data = [];   
          this.successFound = false;
          this.toastr.info('No results found');  
          this.findData = false;
          this.data = [];   
      }
    );
  } 
  
  /**
   * Deletes an agency.
   * @param id Agency id.
   */
  delete(id: any) {
    this.logger.info("---delete()---");
    this.restService.delete(id).subscribe(
      (res) => {
        this.toastr.success('Agency deleted!');
        this.data.forEach((t, i) => {
          if (t.id === id) { this.data.splice(i, 1); }
        });
      }
    );
  }

  /**
   * Sets the agency to delete.
   */
  setAgency(agencyid: number) {
    this.logger.info("---setAgency()---");
    this.agencyid = agencyid;
  }

  /**
   * Validates if there are not parameters on both search fields.
   */
  noSearchParameters (group: FormGroup) {
    const agencyName = group.value.agencyName;
    const status = group.value.status;

    if ((agencyName.trim() === '') && (status.trim() === '')) {
      this.noParameters = true;
      return { missingParameters: true };
    }
    else {
      this.noParameters = false;
      return { missingParameters: false };
    }
  }
}