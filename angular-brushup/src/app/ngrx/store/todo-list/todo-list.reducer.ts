import { createReducer, on } from "@ngrx/store";
import { addTodo, editTodo, removeTodo, searchTodos, toggleTodo } from "./todo-list.actions";

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
    on(addTodo, (state, { title }) => (
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
    on(removeTodo, (state, { id }) => ({
        ...state,
        toDos: state.toDos.filter(todo => todo.id !== id)
    })),
    on(toggleTodo, (state, { id }) => ({
        ...state,
        toDos: state.toDos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
    on(editTodo, (state, { id, title }) => ({
        ...state,
        toDos: state.toDos.map(todo =>
            todo.id === id ? { ...todo, title } : todo
        )
    })),
    on(searchTodos, (state, { searchTerm }) => ({
        ...state,
        searchTerm
    }))
);