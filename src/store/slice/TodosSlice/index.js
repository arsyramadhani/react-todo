import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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
    },
});

export const { addTask } = todosSlice.actions;

export default todosSlice.reducer;
