import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

const initialState = 0;

export const counterFeatureKey = 'count';

export const counterReducer = createReducer(
    initialState,
    on(increment, s => s + 1),
    on(decrement, s =>  s > 0 ? s - 1 : 0 ),
    on(reset, () => 0)
);

