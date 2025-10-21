import { Component } from '@angular/core';
import { Counter } from '../../components/counter/counter';
import { TodoList } from '../../components/todo-list/todo-list';
import { TodoContainer } from '../../components/todo-container/todo-container';

@Component({
  selector: 'app-ngrx-page',
  imports: [ Counter, TodoContainer ],
  providers: [],
  templateUrl: './ngrx-page.html',
  styleUrl: './ngrx-page.scss'
})
export class NgrxPage {

}
