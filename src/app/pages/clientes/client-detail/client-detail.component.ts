import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ubs-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  clients: Client;
  private sub: any;
  private response: any;
  private errMsg = '';
  atributos: any[] = [];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        const client =params['id'];
        this.clientService
            .getClient(client)
            .subscribe(c => this.clients = c);
      });
  }

}