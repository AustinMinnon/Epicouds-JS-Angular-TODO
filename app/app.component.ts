import { Component } from 'angular2/core';

// defining annotation aka "decorator"
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>To-Do List using Angular</h1>
    <h3>{{ task.description }}</h3>
  </div>
  ` //uses backticks
})



export class AppComponent {
  public done: = false;
  constructor(public description: string, public id: number) {

  }
}
