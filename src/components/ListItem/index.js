import React, { useState } from 'react';
import { FaCheckCircle, FaRegCircle, FaTrash } from 'react-icons/fa';

const ListItem = ({ id, task, complete, onComplete, onEdit, onDelete }) => {
    const [isHover, setIsHover] = useState(false);

    const onHandleComplete = () => {
        onComplete({ id: id, complete: !complete });
    };

    const onHandleDelete = () => {
        onDelete(id);
    };

    return (
        <div
            className='flex gap-4 px-4 bg-white border-b-2 h-16 border-gray-700 items-center'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <button
                className='h-full focus:outline-none'
                onClick={onHandleComplete}>
                {complete ? (
                    <FaCheckCircle size='24px' />
                ) : (
                    <FaRegCircle size='24px' />
                )}
            </button>
            <button
                className={`flex-1 text-left h-full focus:outline-none  ${
                    complete && 'line-through'
                }`}>
                {task}
            </button>
            <button
                onClick={onHandleDelete}
                className={` text-left h-full focus:outline-none   ${
                    !isHover && 'hidden'
                }`}>
                <FaTrash size='24px' />
            </button>
        </div>
    );
};

export default ListItem;
