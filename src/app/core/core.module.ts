import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { tasksReducer } from './store/tasks/tasks.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({ tasks: tasksReducer }), AppRoutingModule, CommonModule],
})
export class CoreModule {}
