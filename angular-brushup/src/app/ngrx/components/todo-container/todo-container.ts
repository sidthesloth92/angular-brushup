import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { SearchTodo } from '../search-todo/search-todo';
import { Store } from '@ngrx/store';
import { selectSearchTerm } from '../../store/todo-list/todo-list.selector';
import { AsyncPipe } from '@angular/common';
import { SearchInput } from '../search-input/search-input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, firstValueFrom } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToDoListContainerActions } from '../../store/todo-list/todo-list.actions';

@Component({
  selector: 'app-todo-container',
  imports: [TodoList, SearchTodo, AsyncPipe, SearchInput, ReactiveFormsModule],
  templateUrl: './todo-container.html',
  styleUrl: './todo-container.scss'
})
export class TodoContainer implements OnInit{
  store = inject(Store);
  searchTerm$ = this.store.select(selectSearchTerm);

  searchFormControl = new FormControl('');

  private destroyRef = inject(DestroyRef);


  async ngOnInit() {
    const initial = await firstValueFrom(this.store.select(selectSearchTerm));
    this.searchFormControl.setValue(initial ?? '', { emitEvent: false });

    this.searchFormControl.valueChanges
    .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
    .subscribe(value => {
      this.store.dispatch(ToDoListContainerActions.searchTodos({ searchTerm: value || '' }));
    });
  }


  onSearchChange(searchValue: string) {
    console.log('Search value in TodoContainer:', searchValue);
    this.store.dispatch(ToDoListContainerActions.searchTodos({ searchTerm: searchValue }));
  }

}
