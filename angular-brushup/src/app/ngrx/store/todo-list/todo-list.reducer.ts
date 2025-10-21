import { createReducer, on } from "@ngrx/store";
import { ToDoListContainerActions } from "./todo-list.actions";

interface ToDoItem {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListState {
    toDos: ToDoItem[];
    loading: boolean;
    searchTerm: string;
}

const initialState: TodoListState = {
    toDos: [],
    loading: false,
    searchTerm: ''
};

export const todoListFeatureKey = 'todoListFeature';

let idCounter = 0;
export const todoListReducer = createReducer(
    initialState,
    on(ToDoListContainerActions.addTodo, (state, { title }) => (
        {
            ...state,
            toDos: [
                ...state.toDos,
                {
                    id: ++idCounter,
                    title,
                    completed: false
                }
            ]
        }
    )),
    on(ToDoListContainerActions.removeTodo, (state, { id }) => ({
        ...state,
        toDos: state.toDos.filter(todo => todo.id !== id)
    })),
    on(ToDoListContainerActions.toggleTodo, (state, { id }) => ({
        ...state,
        toDos: state.toDos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
    on(ToDoListContainerActions.editTodo, (state, { id, title }) => ({
        ...state,
        toDos: state.toDos.map(todo =>
            todo.id === id ? { ...todo, title } : todo
        )
    })),
    on(ToDoListContainerActions.searchTodos, (state, { searchTerm }) => ({
        ...state,
        searchTerm
    }))
);