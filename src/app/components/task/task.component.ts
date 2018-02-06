import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task
  @Input() column:number
  @Input() columnLength:number
  @Input() deleteTask
  constructor() {

  }

  ngOnInit() {
    console.log(this)
  }

  moveTask(dir) {
    if(dir == '>') {
      this.task.column++
    } else if (dir == '<') {
      this.task.column--
    }
  }

  shouldShowButton(col,dir) {
    if(col < 2 && dir == '<') return false
    else if (col >= this.columnLength && dir == '>') return false
    return true
  }

}

interface Task {
  id: number,
  task: string,
  column: number
}

