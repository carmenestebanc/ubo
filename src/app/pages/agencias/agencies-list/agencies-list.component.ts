import { Role, isRole } from '../../../app.component';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgencyService } from '../shared/agency.service';
import { Agency } from '../shared/agency.model';
import  {AgenciesListFilterComponent } from "./agencies-list-filter.component";
import { RestService } from '../../../rest/rest-service.component';

@Component({
  selector: 'ubl-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss'],
  providers: [AgencyService, RestService]
})
export class AgenciesListComponent implements OnInit {

  agencies: Agency[] = [];
  public errMsg: any;
  public agencyid: number;
  constructor(
    public agencyService: AgencyService,
    public restService: RestService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    public router: Router,
  ) { this.toastr.setRootViewContainerRef(vcr); }

  // consulta los usuarios en el servidor del API usando observables
  getAgencies() {
    this.agencyService.getAgencies()
      .subscribe(agencies => this.agencies = agencies);
  }

  // métodos invocados al inicio
  ngOnInit(): void {
    this.getAgencies();
  }
  setAgency(agencyid: number) {
    this.agencyid = agencyid;
  }
  delete(id: string) {
    this.restService.delete(id).subscribe(
      (res) => {
        this.toastr.success('Agency deleted!');
        // elimina la agencia del objto agency
        this.agencies.forEach((t, i) => {
          if (t.id === id) { this.agencies.splice(i, 1); }
        });
      }
    );
  }

}
