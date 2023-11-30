import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

const Controls = ({props, store}) => {
    return (
        <div className='App-controls'>
            <h4>В корзине: 2 товара/ 223 p</h4>
            <div className='controls-action'>
            <button onClick={() => store.addItem()}>Перейти</button>
            </div>
        </div>
    );
};

Controls.propTypes = {

};

export default Controls;