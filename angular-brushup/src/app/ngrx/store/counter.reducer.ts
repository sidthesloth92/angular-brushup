import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

export const counterReducer = createReducer(
    0, 
    on(increment, s => s + 1),
    on(decrement, s =>  s > 0 ? s - 1 : 0 ),
    on(reset, () => 0)
);

