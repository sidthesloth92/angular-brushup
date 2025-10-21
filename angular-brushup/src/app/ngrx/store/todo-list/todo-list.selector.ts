import { createFeature, createSelector } from "@ngrx/store";
import { todoListFeatureKey, todoListReducer } from "./todo-list.reducer";


export const todoListFeature = createFeature({
    name: todoListFeatureKey,
    reducer: todoListReducer
});


export const {
    selectToDos,
    selectLoading,
    selectSearchTerm,
} = todoListFeature;


export const selectFilteredTodoList = createSelector(
    selectToDos,
    selectSearchTerm,
    (toDos, searchTerm) => {
        if (!searchTerm) {
            return toDos;
        }
        const lowerSearchTerm = searchTerm.toLowerCase();
        return toDos.filter(todo => todo.title.toLowerCase().includes(lowerSearchTerm));
    }
)
