import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {numberWithSpaces} from "../item";

const Controls = ({visible, cartState}) => {
    let sum = 0
    cartState.forEach(el => sum +=el.price)

    return (
        <div className='App-controls'>
            <h4>В корзине: {cartState.length} товара/ {numberWithSpaces(sum)} &#8381;</h4>
            <div className='controls-action'>
            <button onClick={() => visible()}>Перейти</button>
            </div>
        </div>
    );
};

Controls.propTypes = {

};

export default Controls;