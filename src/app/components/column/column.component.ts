import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent implements OnInit {
  @Input() tasks:TaskArray
  @Input() column:number
  @Input() columnLength:number
  @Input() addTask
  @Input() deleteTask
  constructor() {

  }
  
  ngOnInit() {

  }

}

interface Task {
  id: number,
  task: string,
  column: number
}

interface TaskArray extends Array<Task>{}