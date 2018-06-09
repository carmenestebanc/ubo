import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from './shared/user.service';
import { Users } from './shared/users.model';


@Component({
  selector: 'ubl-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
