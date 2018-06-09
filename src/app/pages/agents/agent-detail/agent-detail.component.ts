import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AgentService } from '../shared/agent.service';
import { Agent } from '../shared/agent.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ubl-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {
  agents: Agent;
  agent: any;
  private sub: any;
  private response: any;
  private errMsg = '';
  atributos: any[] = [];

  constructor(
    private agentsService: AgentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.agent = params['id'];
      this.agentsService
        .getAgent(this.agent)
        .subscribe(c => this.agents = c);
    });
  }

}