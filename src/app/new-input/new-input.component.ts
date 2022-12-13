import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-input',
  templateUrl: './new-input.component.html',
  styleUrls: ['./new-input.component.css'],
})
export class NewInputComponent implements OnInit {
  //   errorMessages: any = {
  //     minlength: 'Value To Short',
  //     required: 'Mandatory Field',
  //     email: 'Email Not Valid',
  //   };
  //   constructor() {}
  //   @Input() validators!: any;

  //   myForm!: FormGroup;
  //   @ViewChild('form') formRef!: NgForm;
  //   errorMessage: string = '';
  //   valid: boolean = true;
  //   value: string = '';
  //   @Input() name: string = '';
  //   @Input() type: string = '';
  //   @Output() valueChange = new EventEmitter<{}>();
  //   @Input() lable: string = '';
  ngOnInit(): void {
    // this.validators = this.validators.split(',');
    // let tempArray = [];
    // console.log(this.validators);
    // this.myForm = new FormGroup({
    //   ranForm: new FormControl('', [Validators['email'], Validators.required]),
    // });
  }
  //   onChange2() {
  //     console.log(this.myForm);
  //   }
  //   onChange() {
  //     this.valueChange.emit({ name: this.name, value: this.value });
  //     console.log(this.formRef, this.formRef.form.valid, 'asd');
  //     this.valid = this.formRef.form.valid;
  //   }
  //   functionName() {
  //     console.log(this.formRef, this.formRef.form.valid, 'asd');
  //     this.valid = this.formRef.form.valid;
  //   }
}
