import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { tasksReducer } from './shared/store/tasks/tasks.reducer';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, TaskListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ tasks: tasksReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
