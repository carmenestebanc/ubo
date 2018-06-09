import { Role, isRole } from '../../../app.component';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AgencyService } from '../../agencias/shared/agency.service';
import { AgentService } from '../shared/agent.service';
import { Agent } from '../shared/agent.model';

@Component({
  selector: 'ubl-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.scss'],
  providers: [ AgentService, AgencyService ]
})
export class AgentsListComponent implements OnInit {

agents: Agent[] = [];
private errMsg: any;
private agentId: number;
private agentName: string;

 constructor(
   private agentService: AgentService,
   private agencyService: AgencyService,
   public toastr: ToastsManager, 
   public  vcr: ViewContainerRef,
   private router: Router,
 ) { this.toastr.setRootViewContainerRef(vcr); }

  // consulta los agents en el servidor del API usando observables
  getAgents() {
    this.agentService.getAgents()
                         .subscribe(agents => this.agents = agents);
  }

  private get _permissionsEdit():boolean {
    return isRole(Role.Administrador);
  }

  // métodos invocados al inicio
  ngOnInit(): void {
    this.getAgents();
  }
  setAgent(id: number, name:string) {
    this.agentId = id;
    this.agentName = name;
  }
  delete(id:string, name: string) {
    this.agentService.deleteAgent(id).subscribe(
      (res) => {
        this.toastr.success('Agent deleted!');
        // elimina el agent del objeto agent
        this.agents.forEach((t, i) => {
            if (t.id === id) { this.agents.splice(i, 1); }
        });
      }
    );
  }

}
