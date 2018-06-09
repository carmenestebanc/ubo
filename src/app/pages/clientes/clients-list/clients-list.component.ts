import { Role, isRole } from '../../../app.component';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Logger } from 'angular2-logger/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Client } from '../shared/client.model';
import { RestService } from '../../../rest/rest-service.component';

@Component({
  selector: 'ubl-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  providers: [RestService]
})

/**
 * Clients list component controller.
 */
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  errMsg: any;
  clientid: number;

  /**
   * ClientsListComponent constructor.
   */
  constructor(
    public restService: RestService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    public router: Router,
    public logger: Logger,
  ) { 
      this.toastr.setRootViewContainerRef(vcr); 
      this.restService.setRestUrl("clients");
  }

/**
 * Gets list of clients from data base.
 */
  getClients() {
    this.logger.info("--getClients()---");
    this.restService.getList()
      .subscribe(clients => {
        this.clients = clients
      },error=>{             
        this.toastr.info('Something went wrong.');     
    }
    );         
  }

 /**
  * Initialization of component.
  */
  ngOnInit(): void {
    this.getClients();
  }

  setClient(clientid: number) {
    this.clientid = clientid;
  }

  /**
   * Deletes a client from clients list.
   * @param id client id.
   */
  delete(id: string) {
    this.logger.info("---delete()---");
    this.restService.delete(id).subscribe(
      (res) => {
        this.toastr.success('Client deleted!');
        this.clients.forEach((t, i) => {
          if (t.id === id) { this.clients.splice(i, 1); }
        });
      }
    );
  }
}
