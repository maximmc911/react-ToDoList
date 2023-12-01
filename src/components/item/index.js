import React, {useState} from "react";
import PropTypes from "prop-types";
import {handleCheckbag, handleCheckMoney, handleCheckMoney1} from '../UI/formatCurrency.js'
import './style.css';
import {formatCurrency, handleDeleteIdItem} from '../UI/formatCurrency.js'

function Item(props) {

  // Счётчик выделений
  const [count, setCount] = useState(0);



  const callbacks = {
    onClick: () => {
      props.onSelect(props.item.code);
      if (!props.item.selected) {
        setCount(count + 1);
       handleCheckbag(1 , 0)
       handleCheckMoney(props.item.price , 0 )
       
      }
    },
    onDelete : () => {
      props.onSelect(props.item.code);
      if (!props.item.selected) {
        props.item.delete= true
        handleCheckMoney(props.item.price , props.item.count )
        handleCheckbag(1 , props.item.count)
        handleDeleteIdItem(props.item.code)
        
      }else{
        props.item.delete= true
        handleDeleteIdItem(props.item.code)
        handleCheckbag(1 , props.item.count)
        
      }
    }
    
  }
  
  return (
    <>

    <div className='Item' 
      >
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
     
      <div className='Item-price'>
        <p className='price'>{formatCurrency(props.item.price)} <span> &#8381;</span></p>
         {props.close.close ? (<p className='price'>{props.item.count}<span>шт.</span> </p>): null}
         </div>
      <div className='Item-actions'>
      {
      !props.close.close ? 
      ( 
      <button onClick={callbacks.onClick}>
          Добавить
        </button>
        ): 
        (
        <button onClick={callbacks.onDelete} >
          Удалить
        </button>
        )
        }
     
      </div>
    </div>

    </>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,

  onSelect: PropTypes.func
};

Item.defaultProps = {
  onDelete: (e) => {
    console.log(`cработал код ${e}`);
  },
  onSelect: () => {
  },
}

export default React.memo(Item);
