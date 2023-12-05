import React from "react";
import './style.css';
import PropTypes from 'prop-types';
import Item from "../item";

function List({list, showQuantity = false, onAddItemToCart, onDeleteItem}) {
  return (
    <div className='List'>
      {list.map(item => (
        <div key={item.code} className='List-item'>
          <Item item={item} showQuantity={showQuantity} onAddItemToCart={onAddItemToCart} onDeleteItem={onDeleteItem}/>
        </div>
      ))}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
  onAddItemToCart: PropTypes.func,
  onDeleteItem: PropTypes.func,
  showQuantity: PropTypes.bool,
};

export default React.memo(List);
