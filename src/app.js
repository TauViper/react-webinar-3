import React from 'react';
import {createElement} from './utils.js';
import './styles.css';
import Head from "./components/head";
import Item from "./components/item";
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

  return (
    <PageLayout>
      <Head title='Магазин'/>
     <Controls store={store}/>
    <ListItems list={list} store={store}/>
        <CartItems cart={cart} store={store}/>
    </PageLayout>
  );
}

export default App;
