import React from 'react';
import Header from '../Header';
import NewTask from '../NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/slice/TodosSlice';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const onSubmit = data => {
        dispatch(addTask(data));
    };

    return (
        <div className='bg-green-200 h-full flex flex-col justify-between'>
            {/* <div className='bg-red-400'>Header</div> */}
            <Header />
            <div className='flex-1'>
                {todos.map(todo => (
                    <h3>{todo.task}</h3>
                ))}
            </div>
            <NewTask onSubmit={onSubmit} />
        </div>
    );
};

export default Todo;
