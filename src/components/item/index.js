import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'


export const numberWithSpaces = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const Item = ({item, universalFunc, buttonName}) => {

    return (
        <div className='Item'>
            <div className='Item-code'>{item.code}</div>
            <div className='Item-title'>{item.title}</div>
             <div className='Item-price'>{numberWithSpaces(item.price)}
                <span className='Item-price'>&#8381;</span></div>
            {item.quantity &&  <div className='Item-price'>{numberWithSpaces(item.quantity)}
                <span className='Item-price'>шт</span></div>}
            <div className='Item-actions'>
                <button onClick={() => universalFunc(item)}>
                    {buttonName}
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
    universalFunc: PropTypes.func,
};

export default Item;