import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFilteredTodoList, selectToDos } from '../../store/todo-list/todo-list.selector';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addTodo, toggleTodo, removeTodo } from '../../store/todo-list/todo-list.actions';

@Component({
  selector: 'app-todo-list',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {

  store = inject(Store);
  todos$ = this.store.select(selectFilteredTodoList);


  protected todoForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [
      Validators.required, Validators.minLength(3), Validators.maxLength(50)
    ] })
  });
  
  addToDo() {
    // Logic to add a new todo item
    console.log('Add Todo button clicked');
    this.store.dispatch(addTodo({ title: this.todoForm.value.title! }));
    this.todoForm.reset();
  }

  toggleTodo(id: number) {
    console.log('Toggle Todo with id:', id);
    this.store.dispatch(toggleTodo({ id }));
  }

  deleteTodo(id: number) {
    console.log("Delete todo with id: ", id);
    this.store.dispatch(removeTodo({ id }));
  }
}
