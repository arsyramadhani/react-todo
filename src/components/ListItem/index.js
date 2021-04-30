import React from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const ListItem = ({ id, task, complete, onComplete }) => {
    const onHandleComplete = () => {
        onComplete({ id: id, complete: !complete });
    };

    return (
        <div className='flex gap-4 px-4 bg-white border-b-2 h-16 border-gray-700 items-center'>
            <button
                className='h-full focus:outline-none'
                onClick={onHandleComplete}>
                {complete ? (
                    <FaCheckCircle size='24px' />
                ) : (
                    <FaRegCircle size='24px' />
                )}
            </button>
            <button className='flex-1 text-left h-full focus:outline-none'>
                {task}
            </button>
        </div>
    );
};

export default ListItem;
