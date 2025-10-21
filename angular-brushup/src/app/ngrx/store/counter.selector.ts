

export interface AppState {
    count: number;
}

export const selectCount = (state: AppState) => state.count;