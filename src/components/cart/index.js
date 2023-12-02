import React from 'react';
import {numberWithSpaces} from "../item";
import './styles.css'


const CartItems = ({cart, store}) => {
    let sum = 0
    store.state.cart.forEach(el => sum +=el.price)

    return (
        <div className={store.state.visible ? 'cart-visible' : 'cart' }>
            <div className='cart-background'></div>
            <div className='cart-list'>
                <div className='cart-head'>
                    <h1>Корзина</h1>
                    <div className='Item-actions'>
                        <button onClick={() => store.inVisible()}>
                            Закрыть
                        </button>
                    </div>
                </div>
                <div>{
                    cart.length>0 ? cart.map(item =>
                        <div key={item.code} className='List-item'>
                            <div className='Item'>
                                <div className='Item-code'>{item.code}</div>
                                <div className='Item-title'>{item.title}</div>
                                <div className='Item-price'>{numberWithSpaces(item.price)}
                                    <span className='Item-price'>&#8381;</span></div>
                                 <div className='Item-price'>{numberWithSpaces(item.quantity)}
                                    <span className='Item-price'>шт</span></div>
                                <div className='Item-actions'>
                                    <button onClick={() => store.onDeleteChat(item.code)}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                    ): <div className='Item-title'>Нет товаров</div> }

                    <div className='summary'>
                        <h4>Итого:</h4>
                        {numberWithSpaces(sum)} &#8381;
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItems;