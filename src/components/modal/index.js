import React from "react";
import PropTypes from "prop-types";
import './style.css';
import Button from "../UI/button";
import {cn as bem} from "@bem-react/classname";

const ModalWindow = ({children, title, onClose, open}) => {
  const cn = bem('Modal');
  return (
    <div className={'Modal' + (open ? ' Modal_open' : '')}>
    <div className="Modal-container">
      <div className="Modal-title-box">
        <h1 className="Modal-title">{title}</h1>
        <Button onClick={onClose} className={cn('button')}>Закрыть</Button>
      </div>
      {children}
    </div>
  </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

export default React.memo(ModalWindow);