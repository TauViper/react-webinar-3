import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {numberWithSpaces} from "../item";

const Controls = ({props, store}) => {
    let sum = 0
    store.state.cart.forEach(el => sum +=el.price)

    return (
        <div className='App-controls'>
            <h4>В корзине: {store.state.cart.length} товара/ {numberWithSpaces(sum)} &#8381;</h4>
            <div className='controls-action'>
            <button onClick={() => store.onVisible()}>Перейти</button>
            </div>
        </div>
    );
};

Controls.propTypes = {

};

export default Controls;