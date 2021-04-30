import React from 'react';
import Header from '../Header';
import NewTask from '../NewTask';

const Todo = () => {
    return (
        <div className='bg-green-200 h-full flex flex-col justify-between'>
            {/* <div className='bg-red-400'>Header</div> */}
            <Header />
            <div className='flex-1'>Content</div>
            <NewTask />
        </div>
    );
};

export default Todo;
