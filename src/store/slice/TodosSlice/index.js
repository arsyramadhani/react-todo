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
];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 10000) + 1,
                    task: payload,
                    complete: false,
                },
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
