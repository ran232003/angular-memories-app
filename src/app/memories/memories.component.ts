import { Component, OnInit } from '@angular/core';
import { memoriesArray } from './data';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css'],
})
export class MemoriesComponent implements OnInit {
  constructor() {}
  localMemories!: any;
  ngOnInit(): void {
    this.localMemories = memoriesArray;
  }
}
