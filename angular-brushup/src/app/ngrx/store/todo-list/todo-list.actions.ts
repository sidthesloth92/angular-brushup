import { createAction, props } from "@ngrx/store";

export const addTodo = createAction(
    '[Todo List] Add Todo', 
    props<{
        title: string
    }>()
);

export const removeTodo = createAction('[Todo List] Remove Todo', props<{ id: number }>());
export const toggleTodo = createAction('[Todo List] Toggle Todo', props<{ id: number }>());
export const editTodo = createAction('[Todo List] Edit Todo', props<{ id: number; title: string }>());


export const searchTodos = createAction(
    '[Search Todos] Search Todos',
    props<{ searchTerm: string }>()
);

