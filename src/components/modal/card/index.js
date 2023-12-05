import React from "react";
import {formatCurrency} from "../../../utils";
import PropTypes from "prop-types";
import './style.css';
import List from "../../list";

const Cart = ({items, onDeleteItem}) => {
  const price = items.reduce((price, item) => price + (item.price * item.quantity), 0);

  return (
  <div className="Cart-items-wrapper">
    <div className="Cart-items">
      {items.length === 0 && <div className="Cart_empty">Корзина пуста</div>}
      {items.length > 0 &&
        <>
          <List list={items} showQuantity={true} onDeleteItem={onDeleteItem}/>

          <div className="Cart-sum">
            <span className="Cart-sum-text">Итого</span>
            <span className="Highlighted">{formatCurrency(price) } &#8381;</span>
          </div>
        </>
      }
    </div>
  </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    price: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
  onDeleteItem: PropTypes.func,
};

export default React.memo(Cart);
