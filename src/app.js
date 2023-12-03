import React from 'react';
import './styles.css';
import Head from "./components/head";
import Controls from "./components/controls";
import PageLayout from "./components/pageLayout";
import ListItems from "./components/listItems";
import CartItems from "./components/cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

    const list = store.getState().list;
    const cart = store.getState().cart;

    const cartState = store.state.cart
    const visibleState = store.state.visible
    const visible = () => {
        store.onVisible()
    }
    const invisible = () => {
        store.inVisible()
    }
    const addToCart = (item) => {
        store.addToCart(item)
    }
    const onDeleteItem = (code) => {
        store.onDeleteItem(code)
    }

    return (
        <PageLayout>
            <Head title='Магазин'/>
            <Controls visible={visible} cartState={cartState}/>
            <ListItems list={list} universalFunc={addToCart}/>
            <CartItems cart={cart} cartState={cartState} visibleState={visibleState} invisible={invisible}
                       universalFunc={onDeleteItem}/>
        </PageLayout>
    );
}

export default App;
