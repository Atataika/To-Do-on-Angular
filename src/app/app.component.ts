import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cacheArray: object[];
  taskString: string;

  generateTaskId(): string {
    let number: number;
    number = Math.random();
    return `${number.toFixed(5)}`;
  }

  addTask(value: string): void {
    if (localStorage.getItem('undoneTasks') !== null) {
      this.cacheArray = JSON.parse(localStorage.getItem('undoneTasks'));
    }

    let tmpObj: object = {
      id: this.generateTaskId(),
      task: value,
      isDone: false
    }

    if (this.taskString === undefined || this.taskString === "") {
      return alert("Input must not be empty");
    }

    this.cacheArray.push(tmpObj);
    localStorage.setItem('undoneTasks', JSON.stringify(this.cacheArray));
    this.taskString = "";
  }

  removeAllTasks(): void {
    localStorage.clear();
    this.cacheArray = [];
  };

  ngOnInit() {
    if (localStorage.getItem('undoneTasks') === null) {
      this.cacheArray = [];
    } else this.cacheArray = JSON.parse(localStorage.getItem('undoneTasks'));
  }
}
