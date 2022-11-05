import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}
  value: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Output() valueChange = new EventEmitter<{}>();
  @Input() lable: string = '';
  ngOnInit(): void {}
  onChange() {
    this.valueChange.emit({ name: this.name, value: this.value });
    console.log(this.value, 'asd');
  }
}
