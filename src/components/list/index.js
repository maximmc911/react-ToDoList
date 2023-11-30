import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';


function List({list, onSelectItem, ...other}) {

  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item}  onSelect={onSelectItem} close={other}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func
};

List.defaultProps = {
  onDeleteItem: () => {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      lists: this.state.list.filter(item => item.code !== code)
    })
  },
  onSelectItem: () => {
  },
}

export default React.memo(List);
