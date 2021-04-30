import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const NewTask = () => {
    const [value, setValue] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (value.trim() === '') {
            return;
        } else {
            setValue('');
        }
    };

    return (
        <>
            <form
                className='flex  px-4 py-4 gap-2 bg-gray-200 border-t border-gray-800'
                onSubmit={e => onSubmit(e)}>
                <input
                    type='text'
                    className='flex-1 focus:outline-none h-full px-6 rounded-full'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button
                    type='submit'
                    className='w-14 h-14 bg-indigo-600 flex items-center justify-center rounded-full text-white focus:outline-none '>
                    <FaPlus />
                </button>
            </form>
        </>
    );
};

export default NewTask;
