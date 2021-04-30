import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/TodosSlice';

const rootReducer = {
    todos: todosReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
