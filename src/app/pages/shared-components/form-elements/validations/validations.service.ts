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
export class ValidationsService {

  constructor(
    private logger: Logger,
    public toastr: ToastsManager,) {
   }

   emailValidator(control: FormControl): {[key:string]: any} {
        const emailRegexp =/^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    }   
    
    cellphoneValidator(control: FormControl): {[key:string]: any} {
        //const cellphone = /^\+\d{1,4} \d{1,3}[-]\d{4,12}$/;
        const cellphone = /\d/;
        if (control.value && !cellphone.test(control.value)) {
        return { invalidcellphone: true };
        }
    }

    notNullValidator(control: FormControl): { [key: string]: any } {
        const checkIt = control.value
        if (checkIt.trim() == '') {
            return { invalid: true };
        }
    }

    justLettersValidator(control: FormControl): {[key:string]: any} {
        const justLettersRegexp = /^[a-zA-Z\s]*$/;
        if (control.value && !justLettersRegexp.test(control.value)) {
            return { invalidString: true };
        }
    }

    tooManyWordsValidator(control: FormControl): {[key:string]: any} {
        if(control.value.split(" ").length > 3) {
            return { tooManyWords: true };
        }
    }
    
    isValidDate(control: FormControl): {[key:string]: any} {
        // First check for the pattern
        var date = new Date().getTime();
        var birth_date = new Date (control.value).getTime();
        var dateYear = new Date().getFullYear();

        const regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
        
        if(control.value && !regex_date.test(control.value))
        {
            return { invalidDateFormat: true};
        }

        // Parse the date parts to integers
        var parts   = control.value.split("-");
        var day     = parseInt(parts[2], 10);
        var month   = parseInt(parts[1], 10);
        var year    = parseInt(parts[0], 10);

        // Check the ranges of month and year
        if(control.value && (year < 1000 || year > 3000 || month == 0 || month > 12))
        {
            return { invalidDateYearRange: true};
        }

        if (birth_date > date) {
            return { invalidFutureDate: true};
        }
        
        if (dateYear - year < 18) {
            return { invalidUnderAge: true};
        }

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(control.value && (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)))
        {
            monthLength[1] = 29;
        }

        // Check the range of the day 
        if (control.value && (day < 0 || day >= monthLength[month - 1])) {
            return { invalidDateDayRange: true};
        }
    }

    countWordsValidator(control: FormControl): {[key:string]: any} {
        if (control.value.split(" ").length < 2) {
            return { countWords: true };
        }
        if ((control.value.split(" ").length < 3) && (control.value.substr(control.value.length-1) === " ")){
            return { countWords: true };
        }
        if(control.value.split(" ").length > 6) {
            return { countWords: true };
        }
    }
}
