import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';
// defining annotation aka "decorator"
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
  <div class="container">
    <h1>To-Do List using Angular</h1>
    <task-list
     [taskList]="tasks"
     (onTaskSelect)="taskWasSelected($event)">
     </task-list>
  </div>
  ` //uses backticks
})

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung FU.", 1),
      new Task("Rewatch all the lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
