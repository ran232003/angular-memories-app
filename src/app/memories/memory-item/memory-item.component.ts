import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-item',
  templateUrl: './memory-item.component.html',
  styleUrls: ['./memory-item.component.css'],
})
export class MemoryItemComponent implements OnInit {
  constructor() {}
  @Input() memory: any;
  ngOnInit(): void {}
}
