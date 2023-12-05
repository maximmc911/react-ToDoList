import React from "react";
import "./style.css"
import PropTypes from "prop-types";

const Button = ({children, className, type = 'button', onClick = null}) => {
  return (
    <button
      type={type}
      className={'Button' + (className ? ' ' + className : '')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;