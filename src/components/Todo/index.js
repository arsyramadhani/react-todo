import React from 'react';
import Header from '../Header';
import NewTask from '../NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, completeTask } from '../../store/slice/TodosSlice';
import ListItem from '../ListItem';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const onSubmit = data => {
        dispatch(addTask(data));
    };

    const onComplete = data => {
        dispatch(completeTask(data));
    };

    return (
        <div className='bg-green-200 h-full flex flex-col justify-between'>
            {/* <div className='bg-red-400'>Header</div> */}
            <Header />
            <div className='flex-1 flex flex-col'>
                {todos.map((todo, i) => (
                    <ListItem
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        complete={todo.complete}
                        onComplete={onComplete}
                    />
                ))}
            </div>
            <NewTask onSubmit={onSubmit} />
        </div>
    );
};

export default Todo;
