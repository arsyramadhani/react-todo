import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='mx-auto bg-indigo-200 h-screen md:w-8/12 lg:w-6/12 py-4 md:py-8'>
            {children}
        </div>
    );
};

export default Layout;
