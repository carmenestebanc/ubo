import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AgencyService } from '../shared/agency.service';
import { Agency } from '../shared/agency.model';

import 'rxjs/add/operator/switchMap';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'ubs-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {
  agency: Agency;
  private sub: any;
  private response: any;
  private errMsg = '';
  atributos: any[] = [];

  constructor(
    private agencyService: AgencyService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) { 
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        const agency =params['id'];
        this.agencyService
            .getAgency(agency)
            .subscribe(c => this.agency = c);
      },error=>{             
        this.toastr.info('Something went wrong.');     
    }
    );
  }

}