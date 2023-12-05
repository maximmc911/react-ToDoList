import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {formatCurrency} from "../../utils";
import Button from "../UI/button";

function Item({item, showQuantity = false, onAddItemToCart, onDeleteItem}) {
  return (
    <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>
        {item.title}
        <span className="Item-title-price">{formatCurrency(item.price)} &#8381;</span>
        {showQuantity && <span className={'Item-quantity'}>{item.quantity} шт</span>}
      </div>

      <div className='Item-actions'>
        {onAddItemToCart && (
          <Button onClick={() => onAddItemToCart(item.code)}>
            Добавить
          </Button>
        )}
        {onDeleteItem && (
          <Button onClick={() => onDeleteItem(item.code)}>
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  onAddItemToCart: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

export default React.memo(Item);
