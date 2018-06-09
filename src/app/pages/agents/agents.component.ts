import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AgentService } from './shared/agent.service';
import { Agents } from './shared/agents.model';


@Component({
  selector: 'ubl-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})

export class AgentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
