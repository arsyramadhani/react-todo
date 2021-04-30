import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='bg-gray-700'>
            <div className='mx-auto   h-screen md:w-8/12 lg:w-6/12 py-4 md:py-16'>
                {children}
            </div>
        </div>
    );
};

export default Layout;
