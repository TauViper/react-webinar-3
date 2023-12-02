import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'


export const numberWithSpaces = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const Item = ({props, store}) => {

    return (
        <div className='Item'>
            <div className='Item-code'>{props.code}</div>
            <div className='Item-title'>{props.title}</div>
             <div className='Item-price'>{numberWithSpaces(props.price)}
                <span className='Item-price'>&#8381;</span></div>
            <div className='Item-actions'>
                <button onClick={() => store.addToCart(props)}>
                    Добавить
                </button>
            </div>
        </div>
    );
};

Item.propTypes = {
    code: PropTypes.string,
    selected: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
};

export default Item;