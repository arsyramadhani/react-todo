import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            return [
                {
                    id: Math.floor(Math.random() * 10000) + 1,
                    task: payload,
                    complete: false,
                },
                ...state,
            ];
        },
        completeTask: (state, { payload }) => {
            const idx = state.findIndex(el => el.id === payload.id);
            state[idx].complete = payload.complete;
        },
        deleteTask: (state, { payload }) => {
            let oldState = state.filter(el => el.id !== payload);
            return [...oldState];
        },
    },
});

export const { addTask, completeTask, deleteTask } = todosSlice.actions;

export default todosSlice.reducer;
