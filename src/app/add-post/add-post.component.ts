import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  constructor() {}
  myForm!: FormGroup;
  title: string = '';
  description: string = '';
  image: any;
  errorMessages: any = {
    emailForm: '',
    passwordForm: '',
    nameForm: '',
  };
  ngOnInit(): void {
    this.myForm = new FormGroup({
      titleForm: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
      ]),
      descriptionForm: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
      ]),
      imageForm: new FormControl('', [Validators.required]),
    });
  }
  onChange2(formName: string, key: any) {
    let object = {
      name: key,
      value: this.myForm.controls[formName].value,
      valid: this.myForm.controls[formName].valid,
    };
    console.log(object);
    //this.valueChange.emit(object);
  }
}
