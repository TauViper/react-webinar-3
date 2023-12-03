import React from 'react';
import Item, {numberWithSpaces} from "../item";
import './styles.css'


const CartItems = ({cart, cartState, visibleState, invisible, universalFunc}) => {
    let sum = 0
    cartState.forEach(el => sum +=el.price)

    return (
        <div className={visibleState ? 'cart-visible' : 'cart' }>
            <div className='cart-background'></div>
            <div className='cart-list'>
                <div className='cart-head'>
                    <h1>Корзина</h1>
                    <div className='Item-actions'>
                        <button onClick={() => invisible()}>
                            Закрыть
                        </button>
                    </div>
                </div>
                <div>{
                    cart.length>0 ? cart.map(item =>
                        <div key={item.code} className='List-item'>
                            <Item item = {item} universalFunc={universalFunc} buttonName='Удалить'/>
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