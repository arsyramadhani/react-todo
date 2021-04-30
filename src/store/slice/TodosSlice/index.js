import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 5513,
        task: 'Pul Task',
        complete: true,
    },
    {
        id: 1414,
        task: 'Create Repository',
        complete: false,
    },
    {
        id: 5112,
        task: 'Install Linux WSL',
        complete: false,
    },
];

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
            state = state.map(el =>
                el.id === payload.id ? (el.complete = payload.complete) : el
            );
        },
    },
});

export const { addTask, completeTask } = todosSlice.actions;

export default todosSlice.reducer;
