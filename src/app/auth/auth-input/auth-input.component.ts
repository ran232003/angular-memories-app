import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { checkField } from './helperFunction';
@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css'],
})
export class AuthInputComponent implements OnInit {
  errorMessages: any = {
    emailForm: '',
    passwordForm: '',
    nameForm: '',
  };
  pageStatus: string = '';
  @Output() valueChange = new EventEmitter<{}>();

  constructor(private router: ActivatedRoute) {}
  @Input() validators!: any;

  myForm!: FormGroup;
  @ViewChild('form') formRef!: NgForm;
  errorMessage: string = '';
  errorMessageEmail: string = '';
  errorMessageName: string = '';
  valid: boolean = true;
  email: string = '';
  password: string = '';

  name: string = '';

  ngOnInit(): void {
    this.myForm = new FormGroup({
      emailForm: new FormControl('', [
        Validators['email'],
        Validators.required,
      ]),
      nameForm: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
      ]),
      passwordForm: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
    this.router.params.subscribe((param) => {
      this.pageStatus = param.status;
    });
  }
  onChange2(formName: string, key: any) {
    this.errorMessages[formName] = checkField(
      formName,
      this.myForm.controls[formName].value
    );
    let object = {
      name: key,
      value: this.myForm.controls[formName].value,
      valid: this.myForm.controls[formName].valid,
    };
    this.valueChange.emit(object);
  }
  onChange() {
    // this.valueChange.emit({ name: this.name, value: this.value });
    // console.log(this.formRef, this.formRef.form.valid, 'asd');
    // this.valid = this.formRef.form.valid;
  }
  functionName() {
    this.valid = this.formRef.form.valid;
  }
}
