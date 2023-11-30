import React from 'react';
import './styles.css'
const PageLayout = ({children}) => {
    return (
        <div className='App'>
        {children}
        </div>
    );
};

export default PageLayout;