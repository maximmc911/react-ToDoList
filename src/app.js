import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from "./components/modal/card/";
import ModalWindow from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const {list, cartItems, openCart} = store.getState();

  const callbacks = {
    onAddItemToCart: useCallback((code) => {
      store.addItemToCart(code);
    }, [store]),

    onDeleteItem: useCallback((code) => {
      store.deleteItemFromCart(code);
    }, [store]),

    onOpenCart: useCallback(() => {
      store.openCart();
    }, [store]),

    onCloseCart: useCallback(() => {
      store.closeCart();
    }, [store]),
  }

  return (
    <PageLayout>
      <Head title="Магазин"/>
      <Controls openCart={callbacks.onOpenCart} cartItems={cartItems}/>

      <List list={list} onAddItemToCart={callbacks.onAddItemToCart}/>

      <ModalWindow title="Корзина" open={openCart} onClose={callbacks.onCloseCart}>
        <Cart items={cartItems} onDeleteItem={callbacks.onDeleteItem}/>
      </ModalWindow>
    </PageLayout>
  );
}

export default App;
