import React from 'react';
import Header from '../Header';
import NewTask from '../NewTask';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTask,
    completeTask,
    deleteTask,
} from '../../store/slice/TodosSlice';
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

    const onEdit = data => {
        alert(data);
    };
    const onDelete = data => {
        dispatch(deleteTask(data));
    };

    return (
        <div className=' h-full flex flex-col justify-between '>
            <Header />
            <div className='flex-1  bg-gray-50 flex-col overflow-y-auto px-2 pt-4 md:px-4 '>
                {todos.length === 0 && (
                    <p className=' text-center my-auto text-gray-400'>
                        Start by adding new task
                    </p>
                )}
                {todos.map((todo, i) => (
                    <ListItem
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        complete={todo.complete}
                        onComplete={onComplete}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
            <NewTask onSubmit={onSubmit} />
        </div>
    );
};

export default Todo;
