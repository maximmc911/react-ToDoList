import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './style.css';
import ModalWindow from "../modal/index.jsx";
import {checkBag, checkMoney, formatCurrency} from '../UI/formatCurrency.js'

function Controls({list}) {
  const [open, setOpen] = useState(false)

  const onOpen = () =>{
    setOpen(!open)
  }
  

  return (
    <>
    <div className='Controls'>
      <div className='Control_item'>
        <p>В корзине:</p>
        { ( checkBag == 0) ?
          ( <h4>Пусто</h4>):
          ( <h4>{checkBag} товара / { formatCurrency(checkMoney)} &#8381;</h4>)
        

        }
      </div>
    <div className='Control'>
      <button className='Control_BTN' onClick={() => onOpen()}>Перейти</button>
    </div>
    </div>
    <ModalWindow open={open} list={list}/>
    </>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
