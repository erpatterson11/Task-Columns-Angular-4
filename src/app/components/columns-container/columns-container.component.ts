import { Component, OnInit } from '@angular/core';

let taskId = 1

function Task(col:number, task:string) {
    this.id = taskId
    this.task = task 
    this.column = col
    taskId++
}

@Component({
  selector: 'app-columns-container',
  templateUrl: './columns-container.component.html',
  styleUrls: ['./columns-container.component.css']
})

export class ColumnsContainerComponent implements OnInit {
  columns:number[]
  tasks:TaskArray[]

  constructor() { 
    this.columns = [1,2,3,4]
    this.tasks = []
    for(let i = 0; i < 5; i++) {
      let col = ~~(Math.random()*4) + 1
      this.tasks.push(new Task(col, 'this is a task'))
    }
    this.deleteTask = this.deleteTask.bind(this)
  }

  ngOnInit() {
  }

  addTask(col) {
    let task = window.prompt()
    this.tasks.push(new Task(col, task))
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

}


interface Task {
  id: number,
  task: string,
  column: number
}

interface TaskArray extends Array<Task>{}