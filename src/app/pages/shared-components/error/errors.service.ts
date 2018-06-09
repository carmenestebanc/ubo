import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ErrorsService {

  constructor(
    private logger: Logger,
    public toastr: ToastsManager,) {
   }

   emailTakenError(error: any) : any {        
        var json = JSON.parse(error._body);                
        if (json.errors.email == "The email has already been taken.") {
            this.toastr.error('The email has already been taken.');
            return 1;
        }
        else {
            return 0;
        }
    }   
}