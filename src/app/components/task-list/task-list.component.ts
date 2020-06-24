import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() cacheArray: any;
  response: any;

  constructor(private http: HttpClient) {}

  changeTaskState(i: any): void {
    this.cacheArray[i].isDone = !this.cacheArray[i].isDone;

    localStorage.setItem('undoneTasks', JSON.stringify(this.cacheArray));
  }

  deleteTask(event: any): void {
    this.cacheArray = this.cacheArray.filter((key: CacheArray) => {
      return event.target.parentElement.id === key.id ? false : true;
    });

    localStorage.setItem('undoneTasks', JSON.stringify(this.cacheArray));
    event.target.parentElement.remove();
  }

  ngOnInit() {
    // this.http.get("http://www.json-generator.com/api/json/get/cflRGtzdXC?indent=2")
    //   .subscribe((response) => {
    //     this.response = response;
    //     console.log(this.response);
    //   })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cacheArray, event.previousIndex, event.currentIndex);
  }
}

// Я не знаю куда девать интерфейс
interface CacheArray {
  id: string;
  task: string;
  isDone: boolean;
}
