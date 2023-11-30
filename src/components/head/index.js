import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';


const Head = ({title}) => {
    return (
        <div className='App-head'>
            <h1>{title}</h1>
        </div>
    );
};


Head.propTypes = {
    title: PropTypes.string,
};
export default Head;