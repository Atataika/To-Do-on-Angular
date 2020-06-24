import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { increment, reset } from './core/store/tasks/tasks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cacheArray: object[];
  taskString: string;
  public tasks$: any;

  constructor(private store: Store<{ tasks: any }>) {}

  generateTaskId(): string {
    let number: number;
    number = Math.random();
    return `${number.toFixed(5)}`;
  }

  addTask(value: string): void {
    if (localStorage.getItem('undoneTasks') !== null) {
      this.cacheArray = JSON.parse(localStorage.getItem('undoneTasks'));
    }

    const tmpObj: object = {
      id: this.generateTaskId(),
      task: value,
      isDone: false,
    };

    if (this.taskString === undefined || this.taskString === '') {
      return alert('Input must not be empty');
    }

    this.cacheArray.push(tmpObj);
    localStorage.setItem('undoneTasks', JSON.stringify(this.cacheArray));
    this.taskString = '';
    this.store.dispatch(increment());
  }

  removeAllTasks(): void {
    localStorage.clear();
    this.cacheArray = [];
    this.store.dispatch(reset());
  }

  ngOnInit() {
    this.tasks$ = this.store.pipe(select('tasks'));

    if (localStorage.getItem('undoneTasks') === null) {
      this.cacheArray = [];
    } else {
      this.cacheArray = JSON.parse(localStorage.getItem('undoneTasks'));
      this.store.dispatch(increment());
    }
  }
}
