import { Component, ViewEncapsulation, OnInit, Injectable } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidationsForm } from './validations.interface';

@Component({
  selector: 'ubl-validations',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './validations.component.html'
})

@Injectable()
export class ValidationsComponent implements OnInit  {
    myForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
         this.myForm = this.formBuilder.group({
            simple: ['', Validators.required],
            first_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), notNullValidator, justLettersValidator, tooManyWordsValidator])],
            last_name: ['', Validators.compose([Validators.required, Validators.maxLength(60), notNullValidator, justLettersValidator, tooManyWordsValidator])],
            minLength: ['', Validators.compose([Validators.required,  Validators.minLength(3)])],
            maxLength:  ['', Validators.compose([Validators.required,  Validators.maxLength(10)])],
            email: ['', Validators.compose([Validators.required, emailValidator, Validators.maxLength(40)])],
            password: ['', Validators.required],
            phone: ['', Validators.compose([Validators.required, cellphoneValidator, Validators.maxLength(30), notNullValidator])],
            confirmPassword: ['', Validators.required],
            website: ['', Validators.compose([Validators.required, websiteValidator])]
        }, {validator: matchingPasswords('password', 'confirmPassword')})
    }

    onSubmit({ value, valid }: { value: MyValidationsForm, valid: boolean }) {
       // this.logger.info(value, valid);
    }

}

export function emailValidator(control: FormControl): {[key:string]: any} {
    const emailRegexp =/^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}

export function websiteValidator(control: FormControl): {[key: string]: any} {
    var websiteRegexp = /(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.\w+\/?.+$/;    
    if (control.value && !websiteRegexp.test(control.value)) {
        return {invalidUrl: true};
    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        let password= group.controls[passwordKey];
        let passwordConfirmation= group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({mismatchedPasswords: true})
        }
    }
}

export function cellphoneValidator(control: FormControl): {[key:string]: any} {
    const cellphone = /^\+\d{1,4} \d{1,3}[-]\d{4,12}$/;
    if (control.value && !cellphone.test(control.value)) {
      return { invalidcellphone: true };
    }
}

export function notNullValidator(control: FormControl): { [key: string]: any } {
    const checkIt = control.value
    if (checkIt.trim() == '') {
        return { invalid: true };
    }
}

export function justLettersValidator(control: FormControl): {[key:string]: any} {
    const justLettersRegexp = /^[a-zA-Z\s]*$/;
    if (control.value && !justLettersRegexp.test(control.value)) {
        return { invalidString: true };
    }
}
export function tooManyWordsValidator(control: FormControl): {[key:string]: any} {
    if(control.value.split(" ").length > 3) {
        return { tooManyWords: true };
     }
}