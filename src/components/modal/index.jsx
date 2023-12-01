import React, { useEffect, useState } from 'react'
import s from './style.module.css'  
import List from '../list/index.js'
import { formatCurrency,  idItem , handleDeleteIdItem  } from '../UI/formatCurrency.js'



const ModalWindow =({list, open}) => {
    const [close, setClose] = useState(true);
    const lists = []
    let check = 0;

    const handleClose = () =>{
        setClose(false)
    }
    for (const key in list) {
        if (list[key].count) {
            lists.push(list[key])
            check += (list[key].price * list[key].count);
            console.log(lists);
            if(list[key].delete){
                lists.pop(list[key]);
                check-=(list[key].price * list[key].count);
            }
        }
    }
    



    useEffect(() => {
        setClose(!close)
     
    }, [open])
 
  return (
      <>
    {<div className={(close ) ? s.bg : s.bg_close} onClick={handleClose}>
    </div>}
    <div className={(close) ? s.bg__modal : s.bg__modalClose} >
    <div className={s.modal}>
        <div className={s.modal__header}>
            <h1>Корзина</h1>
            <button className={s.header__btn} onClick={handleClose}>
                закрыть
            </button>
        </div>
        <div className={s.modal__body}>
            <List list={lists} close={close} />
        </div>
        <div className={s.modal__footer}>
            <h4>Итого </h4>
            <h4>{formatCurrency(check)}   &#8381;</h4>
            
        </div>
    </div>


    </div>
    </>
  )
}


export default ModalWindow