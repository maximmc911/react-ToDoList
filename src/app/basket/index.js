import {memo, useCallback} from 'react';
import ItemBasket from "../../components/item-basket";
import List from "../../components/list";
import ModalLayout from "../../components/modal-layout";
import BasketTotal from "../../components/basket-total";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import {changeLang} from "../../utils";

function Basket() {

  const store = useStore();

  const select = useSelector(state => ({
    list: state.basket.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    toggleLang:state.toggleLang.toggle
  }));

  const callbacks = {
    // Удаление из корзины
    removeFromBasket: useCallback(_id => store.actions.basket.removeFromBasket(_id), [store]),
    // Закрытие любой модалки
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  }

  const renders = {
    itemBasket: useCallback((item) => {
      return <ItemBasket
        item={item}
        onRemove={callbacks.removeFromBasket}
        closeModal={callbacks.closeModal}
        toggleLang={select.toggleLang}
        link={`item-details/${item._id}`}
      />
    }, [callbacks.removeFromBasket, select.toggleLang]),
  };

  return (
    <ModalLayout
      title={changeLang(select.toggleLang,'Корзина')}
      onClose={callbacks.closeModal}
    >
    <List
      list={select.list}
      renderItem={renders.itemBasket}
    />
    <BasketTotal
      sum={select.sum}
      toggleLang={select.toggleLang}
    />
    </ModalLayout>
  );
}

export default memo(Basket);
