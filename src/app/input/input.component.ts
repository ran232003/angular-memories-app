import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  errorMessages: any = {
    minlength: 'Value To Short',
    required: 'Mandatory Field',
    email: 'Email Not Valid',
  };
  constructor() {}
  myForm!: FormGroup;
  @ViewChild('form') formRef!: NgForm;
  errorMessage: string = '';
  valid: boolean = true;
  value: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Output() valueChange = new EventEmitter<{}>();
  @Input() lable: string = '';
  ngOnInit(): void {
    this.myForm = new FormGroup({
      ranForm: new FormControl('', [Validators['email'], Validators.required]),
    });
  }
  onChange2() {
    console.log(this.myForm);
  }
  onChange() {
    this.valueChange.emit({ name: this.name, value: this.value });
    console.log(this.formRef, this.formRef.form.valid, 'asd');
    this.valid = this.formRef.form.valid;
    this.checkError();
  }
  functionName() {
    console.log(this.formRef, this.formRef.form.valid, 'asd');
    this.valid = this.formRef.form.valid;
    this.checkError();
  }
  checkError() {
    console.log(this.formRef.form);
    let i = 0;
    if (this.formRef.form.controls.name.errors) {
      for (const property in this.formRef.form.controls.name.errors) {
        if (i === 0) {
          this.errorMessage = this.errorMessages[property];
        } else {
          this.errorMessage = `${this.errorMessage}, ${this.errorMessages[property]}`;
        }
        i++;
      }
    }
  }
}
