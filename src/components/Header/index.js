import React from 'react';
import { useSelector } from 'react-redux';
import { getDay } from '../../utils';
const Header = () => {
    const todos = useSelector(state => state.todos).length;

    return (
        <div className='bg-gray-200 p-4 rounded-t-2xl '>
            <h1>Good {getDay()}</h1>
            <h1 className='text-4xl font-bold mb-4'>Todo App</h1>
            <span className='bg-blue-50 p-2 rounded-lg border-blue-400 border'>
                Total Task: {todos}
            </span>
        </div>
    );
};

export default Header;
